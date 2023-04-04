import './Home.css'
import { Link } from 'react-router-dom'

const Home = (props) => {  

    return (
        <div id="home-div">
            <h1 id="home-title">Home Page</h1>
            <Link to={`/user/${null}`}>{null}</Link>

            <p>Welcome to PokeLF!</p>
            <p>This is a tool for all the pokemon trainers out there, to help you keep track of the pokemon you have, which ones you are willing to trade, and which pokemon you are hoping to come across on your journey as a pokemon trainer.</p>
            <p>No more need post endlessly through discord servers to finally find a partner to trade with.</p>
        </div>
    )
}

export default Home