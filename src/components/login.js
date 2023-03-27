import { Link } from 'react-router-dom'
import { useState } from 'react'
import PokeSprite from './Pokemon'
import './Login.css'
import axios from 'axios'

const Login = () => {
    return (
        <div>
            <Link to="/user/zoroark">zoroark</Link>
            <div id='formdiv'> 
                <form>
                    <PokeSprite image="mew"/>
                    <div className="box">Huehuehue<i></i></div>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input id="username" placeholder="username"></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" placeholder="password"></input>
                    </div>
                    <button type="submit">Log In</button>
                    <Link to="/user/signup">Don't have an account? Sign up here</Link>
                </form>
            </div>
        </div>
    )
}

export default Login