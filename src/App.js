import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import './App.css';
import { auth } from './firebase-config';
import { signOut, onAuthStateChanged } from 'firebase/auth';

import Login from './components/Login.js';
import PokeSprite from './components/PokeSprite.js';
import NotFound from './components/NotFound.js';
import SignUp from './components/SignUp';
import Home from './components/Home.js'
import PokemonCard from './components/PokemonCard.js';
import UserPokemon from './components/UserPokemon.js'

function App() {

  const [image, setImage] = useState()

  axios.get(`https://pokeapi.co/api/v2/pokemon/mew`)
  .then(res => {
      setImage(res.data.sprites.front_shiny)
  })
  .catch(err => console.log(err))

  const logout = async () => {
    await signOut(auth)
    localStorage.removeItem("email")
    localStorage.removeItem("userId")
  }

  const [user, setUser] = useState()
  
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  return (
    <>
      <header>
        <div id="title">
          <div>
            <img src={`${image}`} alt='mew'/>
          </div>
          <h1>PokeLF</h1>
        </div>
        <nav>
          <ul>
            {
              !user ?
              <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/user">Login</Link></li>
              </>
              :
              <li><Link to="/" onClick={logout}>Logout</Link></li>
            }   
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home user={user}/>}/>
        <Route path="/user">
          <Route index element={<Login />}/>
          <Route path=":id" element={<UserPokemon/>}/>
          <Route path="signup" element={<SignUp />}/>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <footer></footer>
    </>
  );
}

export default App;
