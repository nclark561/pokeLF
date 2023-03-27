import { Link } from 'react-router-dom'
import PokeSprite from './Pokemon'

const SignUp = () => {
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
                    <button type="submit">Create Account</button>
                    <a href="https://google.com">Don't have an account? Sign up here</a>
                </form>
            </div>
        </div>
    )
}

export default SignUp