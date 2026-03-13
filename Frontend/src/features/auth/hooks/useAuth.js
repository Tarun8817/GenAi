import { useContext,useEffect } from "react"
import { AuthContext } from "../auth.context"
import { login, register, logout,getMe } from "../services/auth.api"

export const useAuth = () => {

    // get auth data from context
    const context = useContext(AuthContext)

    // extract values
    const { user, setUser, loading, setLoading } = context

    // login user
    const handleLogin = async ({ email, password }) => {
        setLoading(true) // start loading
        try {
            const data = await login({ email, password }) // call login API
            setUser(data.user) // save user in context
        } catch (error) {
            console.log(error) // show error
        } finally {
            setLoading(false) // stop loading
        }
    }

    // register new user
    const handleRegister = async ({ username, email, password }) => {
        setLoading(true) // start loading
        try {
            const data = await register({ username, email, password }) // call register API
            setUser(data.user) // save user
        } catch (error) {
            console.log(error) // show error
        } finally {
            setLoading(false) // stop loading
        }
    }

    // logout user
    const handleLogout = async () => {
        setLoading(true) // start loading
        try {
            await logout() // call logout API
            setUser(null) // remove user
        } catch (error) {
            console.log(error) // show error
        } finally {
            setLoading(false) // stop loading
        }
    }

     useEffect(() => {
    
            const getAndSetUser = async () => {
                try {
                    const data = await getMe()
                    setUser(data.user)
                } catch (error) {
                    console.log("Failed to fetch user", error)
                } finally {
                    setLoading(false)
                }
            }
    
            getAndSetUser()
    
        }, [])

    // return auth functions
    return { user, loading, handleLogin, handleLogout, handleRegister }
}