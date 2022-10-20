import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function SignUp({onLogin, isLoggedIn}) {
const navigate = useNavigate()
useEffect(()=>{
    if (isLoggedIn) {
        navigate("/browse")
    }
}, [isLoggedIn])
    
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [passwordConfirmation, setPasswordConfirmation] = useState("")
const [errors, setErrors] = useState([])
const [isLoading, setIsLoading] = useState(false)

function handleSubmit(e) {
    e.preventDefault()
    setErrors([])
    // const user = {
    //     username, 
    //     password
    // }
    fetch("/signup", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirmation 
        })
    })
    .then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    
}

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password_confirmation">Confirm Password:</label>
            <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignUp