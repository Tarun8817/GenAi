const jwt = require("jsonwebtoken")
const tokenBlacklistModel = require("../models/blacklist.model")

/**
 * @name authUser
 * @description Middleware used to authenticate a user using a JWT token.
 *              It reads the token from request cookies, verifies it using the JWT secret,
 *              checks if the token is blacklisted, and if valid attaches the decoded
 *              user information to req.user.
 * @access Protected Routes
 */

async function authUser(req,res,next){
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"Token not provided"
        })
    }

    // check if token is blacklisted
    const isTokenBlacklisted = await tokenBlacklistModel.findOne({ token })

    if(isTokenBlacklisted){
        return res.status(401).json({
            message:"Token is invalid. Please login again"
        })
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        req.user = decoded

        next()

    }catch(err){
        return res.status(401).json({
            message:"Invalid token"
        })
    }
}

module.exports = {authUser}