import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function LogIn({onLogin, isLoggedIn}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    useEffect(()=>{
        if (isLoggedIn) {
            navigate("/browse")
        }
    }, [isLoggedIn])

    function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then((r)=> {
            setIsLoading(false)
            if (r.ok) {
                r.json().then((user)=> onLogin(user))
            } else {
                r.json().then((err)=> setErrors(err.errors))
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className='input' onChange = {(e) => setUsername(e.target.value)} value={username} type="text" username="username" placeholder="Enter your username"/>
                <input className='input' onChange = {(e) => setPassword(e.target.value)} value={password} type="password" password="password" placeholder="Enter your password"/>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default LogIn