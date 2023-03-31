import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PokemonCard from "./PokemonCard.js"
import "./UserPokemon.css"


const UserPokemon = () => {
    const [pokemon, setPokemon] = useState()
    const [wishlist, setWishlist] = useState()

    const routeParams = useParams()

    let pokemon1 = ['mewtwo-mega-y', 'zoroark']
    let wishlist1 = ['scrafty', 'floette', 'shaymin-land']

    const getPokemon = async () => {
        await axios.get('/user-pokemon')
    }

    
    if (localStorage.getItem("userId") === routeParams.id) {
        return (
            <div id="user-pokemon">
                <h1 className="title">Your Pokemon</h1>
                <div className="card-container">
                    {                
                        pokemon1.map(e => (<PokemonCard image={e} key={e}/>))
                    }              
                </div>
                <h1 className="title">Looking For</h1>
                <div className="card-container">
                    {
                        wishlist1.map(e => (<PokemonCard image={e} wish={true} key={e}/>))
                    }
                </div>
            </div>
        )
    } else {
        return (
            <h1 className='err-header'>Invalid User</h1>
        )
    }
}

export default UserPokemon