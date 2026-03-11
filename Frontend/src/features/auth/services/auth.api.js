import axios from "axios"

// Axios instance for API requests
const api = axios.create({
  baseURL: "http://localhost:3000", // backend base URL
  withCredentials: true // send cookies with requests
})


// Register new user
export async function register({ username, email, password }) {
  try {

    const response = await api.post("/api/auth/register", {
      username,
      email,
      password
    })

    return response.data

  } catch (error) {
    console.error("Register API Error:", error)
    throw error
  }
}


// Login existing user
export async function login({ email, password }) {
  try {

    const response = await api.post("/api/auth/login", {
      email,
      password
    })

    return response.data

  } catch (error) {
    console.error("Login API Error:", error)
    throw error
  }
}


// Logout current user
export async function logout() {
  try {

    const response = await api.get("/api/auth/logout")

    return response.data

  } catch (error) {
    console.error("Logout API Error:", error)
    throw error
  }
}


// Get current logged-in user
export async function getMe() {
  try {

    const response = await api.get("/api/auth/get-me")

    return response.data

  } catch (error) {
    console.error("GetMe API Error:", error)
    throw error
  }
}