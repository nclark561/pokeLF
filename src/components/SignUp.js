import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div>
            <Link to="/user/zoroark">zoroark</Link>
            <div id='formdiv'> 
                <form>
                    <img src="https://lh6.googleusercontent.com/1R7-BuYW0h2GLR9ARne3l5wTVvLN1CQ3xIL1YW9JcKfx3jA7bS3yxOIzexewQZItYsI=w2400" alt='professor'/>
                    <div className="box">I don't believe I've seen you around here. Who might you be?<i></i></div>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input id="username" placeholder="username"></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" placeholder="password"></input>
                    </div>
                    <button type="submit">Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp