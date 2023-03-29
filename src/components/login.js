import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Login.css'
import axios from 'axios'

const Login = () => {
    const pokemon = 'mewtwo'

    const [loginEmail, setLoginEmail] = useState()
    const [loginPassword, setLoginPassword] = useState()

    const login = async () => {
  
    }

    return (
        <div>
            <Link to={`/user/${pokemon}`}>{pokemon}</Link>
            <div id='formdiv'> 
                <form onSubmit={(event) => {
                    event.preventDefault()
                    let username = document.querySelector("#username").value
                    let password = document.querySelector('#password').value
                    console.log(username, password)
                }}>
                    <img className="professor" src="https://lh6.googleusercontent.com/1R7-BuYW0h2GLR9ARne3l5wTVvLN1CQ3xIL1YW9JcKfx3jA7bS3yxOIzexewQZItYsI=w2400" alt='professor'/>
                    <div className="box">Welcome! What is your name?<i></i></div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input id="email" placeholder="email" onChange={(evt) => {setLoginEmail(evt.target.value)}}></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" placeholder="password" onChange={(evt) => {setLoginPassword(evt.target.value)}}></input>
                    </div>
                    <button type="submit">Log In</button>
                    <Link to="/user/signup">Don't have an account? Sign up here</Link>
                </form>
            </div>
        </div>
    )
}



export default Login