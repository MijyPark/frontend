import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

function SignUpPage (PROPS) {
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSignUpSubmit = (e) => {
    e.preventDefault()

    const requestBody = {email, password}

    axios
    .post("http://localhost:5005/auth/signup", requestBody) 
    .then((response) => {
     navigate('/login')
    })
  }

  return (
      <div className = 'signup-form'>
      <h1>Signup</h1>

      <form onSubmit={handleSignUpSubmit}>
        <label>Email: </label>
          <input
            type='email'
            required
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
       
        <label>Password:</label>
          <input
            type='password'
            required
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
     
        <button type='submit'>Sign Up</button>
      </form>
        <Link to={"/login"}> Login</Link>
     </div>
    )
  }

export default SignUpPage