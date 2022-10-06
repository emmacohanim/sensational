import React, {useState} from 'react'

function LogIn({onLogin}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

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
                <input className='input' onChange = {(e) => setPassword(e.target.value)} value={password} type="text" password="password" placeholder="Enter your password"/>
                <button className='button' type="submit">Log In</button>
            </form>
        </div>
    )
}

export default LogIn