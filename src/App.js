import { Link, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import './App.css';

import Login from './components/Login.js';
import PokeSprite from './components/PokeSprite.js';
import NotFound from './components/NotFound.js';
import SignUp from './components/SignUp';
import Home from './components/Home.js'
import PokemonCard from './components/PokemonCard';

function App() {
  const [image, setImage] = useState()
    axios.get(`https://pokeapi.co/api/v2/pokemon/mew`)
    .then(res => {
        setImage(res.data.sprites.front_shiny)
    })
    .catch(err => console.log(err))

  const pokemon = 'mewtwo-mega-y'

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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/user">Login</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user">
          <Route index element={<Login />}/>
          <Route path=":id" element={<PokemonCard image={pokemon}/>}/>
          <Route path="signup" element={<SignUp />}/>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
