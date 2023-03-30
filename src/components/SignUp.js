import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import {auth} from '../firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp = () => {
    const [registerEmail, setRegisterEmail] = useState()
    const [registerPassword, setRegisterPassword] = useState()

    const register = async () => {
        try {
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        console.log(user)
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div>
            <Link to="/user/zoroark">zoroark</Link>
            <div id='formdiv'> 
                <form onSubmit={event => {
                    event.preventDefault()

                    register()

                    let maBod = {
                        email: registerEmail,
                        password: registerPassword
                    }

                    console.log(maBod)

                    axios.post('/signup', maBod)
                    .then(res => console.log(res, `${maBod} account successfully created`))
                    .catch(err => {
                        alert('invalid email or password')
                        console.log(err)
                    })
                }}>
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