import React, { useState } from 'react'
import "../auth.form.scss"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Login = () => {

  // get login function and loading state
  const { loading, handleLogin } = useAuth()

  // navigation hook
  const navigate = useNavigate()

  // form states
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault() // stop page reload

    await handleLogin({ email, password }) // call login API

    navigate("/") // go to home page
  }

  // show loader while login
  if (loading) {
    return <main><h1>Loading...</h1></main>
  }

  return (
    <main>
      <div className='form-container'>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              value={email} // bind email state
              onChange={(e) => setEmail(e.target.value)} // update email
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              value={password} // bind password state
              onChange={(e) => setPassword(e.target.value)} // update password
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
            />
          </div>

          <button className='button primary-button'>
            Login
          </button>

        </form>

        {/* link to register page */}
        <p>Don't have an account? <Link to="/register">Register</Link></p>

      </div>
    </main>
  )
}

export default Login