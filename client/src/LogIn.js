import React, {useState} from 'react'

function LogIn() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            <form >
                <input className='input' onChange = {(e) => setUsername(e.target.value)} value={username} type="text" username="username" placeholder="Enter your username"/>
                <input className='input' onChange = {(e) => setPassword(e.target.value)} value={password} type="text" password="password" placeholder="Enter your password"/>
                <button className='button' type="submit">Log In</button>
            </form>
        </div>
    )
}

export default LogIn