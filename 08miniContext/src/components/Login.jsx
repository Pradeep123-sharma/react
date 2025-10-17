import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');

    // Using the UserContext
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=> {
        e.preventDefault()
        // Sending the data to UserContext
        setUser({username, password}) 
    }
    return (
        <div>
            <h2>Login</h2>
            <input
                value={username} 
                type="text" 
                placeholder = 'usename'
                onChange={(e)=> setUsername(e.target.value)} 
            />
            <input 
                type="text"     
                placeholder='password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)} 
            />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
