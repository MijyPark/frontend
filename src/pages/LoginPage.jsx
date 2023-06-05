import { useContext, useState } from 'react'
import { SessionContext } from '../context/SessionContext'
import { Link, useNavigate } from 'react-router-dom'

function LogInPage(props) {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
 
  const { storeToken } = useContext(SessionContext)
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault()
  
      const requestBody = {email, password}
  
      axios
      .post("http://localhost:5005/auth/login", requestBody) 
      .then((response) => {
       console.log('JWT token', response.data.authToken );
       authenticateUser();     
       navigate('/')
      })
    }
  
    return (
        <div className = 'slogin-page'>
        <h1>Log In</h1>
  
        <form onSubmit={handleSubmit}>
          <label>Email: </label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
         
          <label>Password:</label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
       
          <button type='submit'>Log In</button>
        </form>
          <p> Don't have an account yet?</p>
          <Link to={"/signup"}> Sign Up</Link>
        </div>
      )
    }
  
  export default LogInPage