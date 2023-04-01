import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PokemonCard from "./PokemonCard.js"
import "./UserPokemon.css"


const UserPokemon = () => {
    const [pokemon, setPokemon] = useState([])
    const [wishlist, setWishlist] = useState([])

    const routeParams = useParams()

    const getPokemon = async () => {
        const {data} = await axios.get(`/user-pokemon/${localStorage.getItem("userId")}`)
        setPokemon(() => data.filter(e => e.pokemon_id !== undefined))
        setWishlist(() => data.filter(e => e.wish_id !== undefined))
    }

    if (pokemon.length === 0) getPokemon()

    if (localStorage.getItem("userId") === routeParams.id) {
        return (
            <div id="user-pokemon">
                <h1 className="title">Your Pokemon</h1>
                <div className="card-container">
                    {                
                        pokemon.map(e => (<PokemonCard image={e.poke_name}
                            key={e.pokemon_id}
                            id={e.pokemon_id}
                            gender={e.gender}
                            pokedex={e.pokedex_num}
                            isShiny={e.is_shiny}
                            forTrade={e.for_trade}
                            type1={e.type1}
                            type2={e.type2}
                            nickname={e.nickname}
                            />))
                    }
                    <button className='add-btn'>Add Pokemon</button>              
                </div>
                <h1 className="title">Looking For</h1>
                <div className="card-container">
                    {
                        wishlist.map(e => (<PokemonCard image={e.wish_name}
                            wish={true} 
                            key={e.wish_id}
                            id={e.wish_id}
                            gender={e.gender}
                            pokedex={e.pokedex_num}
                            isShiny={e.is_shiny}
                            type1={e.type1}
                            type2={e.type2}
                            />))
                    }
                    <button className='add-btn'>Add Pokemon</button>
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