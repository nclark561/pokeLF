import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Login.css'
import axios from 'axios'
import {auth} from '../firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const navigate = useNavigate()
    

    const [loginEmail, setLoginEmail] = useState()
    const [loginPassword, setLoginPassword] = useState()
    const [userId, setUserId] = useState()
    const [email, setEmail] = useState()

    const login = () => {
            signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then(() => {
                localStorage.setItem("email", `${loginEmail}`)
                setEmail(localStorage.getItem('email'))
            })
            .catch(err => console.log(err.message))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        login()

        console.log(userId[0].id)

        navigate(`/user/${userId[0].id}`)
    }

    useEffect(() => {
        axios.get(`/user-id/${localStorage.getItem("email")}`)
        .then((res) => {
            setUserId(res.data)
        })
    }, [email])

    

    return (
        <div>
            
            <div id='formdiv'> 
                <form onSubmit={handleSubmit}>
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