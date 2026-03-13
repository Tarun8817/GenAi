import { createContext, useState } from "react"

// Create authentication context
export const AuthContext = createContext()

// Provider component to wrap the app
export const AuthProvider = ({ children }) => {

    // Store logged-in user data
    const [user, setUser] = useState(null)

    // Loading state for auth operations
    const [loading, setLoading] = useState(true)



    return (
        // Provide auth data to all child components
        <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    )
}