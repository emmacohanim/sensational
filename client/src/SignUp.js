import React, {useState} from 'react'

function SignUp({onLogin}) {

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
    // .then((r)=> {
    //     if (r.ok) {
    //         r.json().then(setCurrentUser)
    //     } else {
    //         r.json().then(e => setErrors(Object.entries(e.error).flat()))
    //     }
    // })
    
}

    return (
        // <form >
        //         <input className='input' onChange = {(e) => setUsername(e.target.value)} value={username} type="text" username="username" placeholder="Enter new username"/>
        //         <input className='input' onChange = {(e) => setPassword(e.target.value)} value={password} type="text" password="password" placeholder="Enter new password"/>
        //         <button className='button' type="submit">Sign Up</button>
        // </form>
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