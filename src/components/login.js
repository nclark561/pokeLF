import './login.css'

const LoginForm = () => {
    return (
        <div id='formdiv'>
            <form>
                <div>
                    <label for="username">Username:</label>
                    <input id="username" placeholder="username"></input>
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password" placeholder="password"></input>
                </div>
                <button type="submit">Log In</button>
                <a href="https://google.com">Don't have an account? Sign up here</a>
            </form>
        </div>
    )
}

export default LoginForm