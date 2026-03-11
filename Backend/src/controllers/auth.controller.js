const userModel = require('../models/user.models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const tokenBlacklistModel = require('../models/blacklist.model')

/**
 * @name registerUserController
 * @route Post /api/auth/register
 * @description Register a new user,expetcs username,email and password in the request body 
 * @access Public
*/

async function registerUserController(req, res) {
    try {
        const { username, email, password } = req.body

        if (!username || !email || !password) {
            return res.status(400).json({
                message: "Please provide username ,email and password"
            })
        }

        const isUserAlredayExists = await userModel.findOne({
            $or: [{ username }, { email }]
        })

        if (isUserAlredayExists) {
            return res.status(400).json({
                message: "Account already exists with this email address or username"
            })
        }

        const hash = await bcrypt.hash(password, 10)

        const user = await userModel.create({
            username,
            email,
            password: hash
        })

        const token = jwt.sign(
            {
                id: user._id, username: user.username
            }, process.env.JWT_SECRET,
            { expiresIn: '1d' }
        )

        res.cookie("token", token)

        return res.status(201).json({
            message: "user registered successfully",
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal server error"
        })

    }
}


/**
 * @name loginUserController
 * @description login a user expects email and password in the request body
 * @access Public
*/

async function loginUserController(req, res) {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password"
            })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid email or password"
            })
        }

        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        res.cookie("token", token)
        res.status(200).json({
            message: "User loggedIn successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal Server error"
        })
    }
}

/**
 * @name logoutUserController
 * @route GET /api/auth/logout
 * @description Logs out the current user by clearing the authentication token from cookies and adding the token to the blacklist so it cannot be used again.
 * @access Public
 */
async function logoutUserController(req, res) {
    const token = req.cookies.token

    if (token) {
        await tokenBlacklistModel.create({ token })
    }

    res.clearCookie("token")

    res.status(200).json({
        message: "User logged out successfully"
    })
}

/**
 * @name getMeController
 * @route GET /api/auth/me
 * @description Fetch details of the currently authenticated user using the ID from the verified JWT token.
 * @access Private
 */

async function getMeController(req, res) {
    try {

        const user = await userModel.findById(req.user.id)

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        res.status(200).json({
            message: "User details fetched successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}


module.exports = {
    registerUserController,
    loginUserController,
    logoutUserController,
    getMeController
}