import './Home.css'
import { Link } from 'react-router-dom'

const Home = (props) => {  

    return (
        <div id="home-div">
            <h1 id="home-title">Home Page</h1>
            <Link to={`/user/${props.user}`}>{props.user}</Link>
        </div>
    )
}

export default Home