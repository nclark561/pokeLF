import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import {auth} from '../firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp = () => {
    const navigate = useNavigate()

    const [registerEmail, setRegisterEmail] = useState()
    const [registerPassword, setRegisterPassword] = useState()

    const register = async () => {
        try {
        await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        localStorage.setItem("email", `${registerEmail}`)
            let email = localStorage.getItem("email")

            const { data } = await axios.get(`/user-id/${email}`)

            localStorage.setItem("userId", `${data[0].id}`)
            
            navigate(`/user/${data[0].id}`)
        } catch (err) {
            console.log(err.message)
            alert('Invalid input')
        }
    }

    const handleSubmit = event => {
        event.preventDefault()

        let maBod = {
            email: registerEmail,
            password: registerPassword
        }

        console.log(maBod)

        axios.post('/signup', maBod)
        .then(res => {
            register()
            console.log(res, `${maBod} account successfully created`)
        })
        .catch(err => {
            alert('invalid email or password')
            console.log(err)
        })
    } 

    return (
        <div>
            <div id='formdiv'> 
                <form onSubmit={handleSubmit}>
                    <img className="professor" src="https://lh6.googleusercontent.com/1R7-BuYW0h2GLR9ARne3l5wTVvLN1CQ3xIL1YW9JcKfx3jA7bS3yxOIzexewQZItYsI=w2400" alt='professor'/>
                    <div className="box">I don't believe I've seen you around here. Who might you be?<i></i></div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input id="create-email" placeholder="email" onChange={(evt) => {setRegisterEmail(evt.target.value)}}></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="create-password" placeholder="password" onChange={(evt) => {setRegisterPassword(evt.target.value)}}></input>
                    </div>
                    <button type="submit">Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp