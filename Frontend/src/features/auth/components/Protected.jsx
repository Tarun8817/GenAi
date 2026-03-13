import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

const Protected = ({ children }) => {

    // get user and loading state
    const { loading, user } = useAuth()

    // show loader while checking login
    if (loading) {
        return <main><h1>Loading...</h1></main>
    }

    // if user not logged in → go to login page
    if (!user) {
        return <Navigate to="/login" />
    }

    // if user logged in → show page
    return children
}

export default Protected