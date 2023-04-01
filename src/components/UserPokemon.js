import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PokemonCard from "./PokemonCard.js"
import "./UserPokemon.css"


const UserPokemon = () => {
    const [pokemon, setPokemon] = useState([])
    const [wishlist, setWishlist] = useState()

    const routeParams = useParams()

    let pokemon1 = ['mewtwo-mega-y', 'zoroark']
    let wishlist1 = ['scrafty', 'floette', 'shaymin-land']

    const getPokemon = async () => {
        const {data} = await axios.get(`/user-pokemon/${localStorage.getItem("userId")}`)
        if (pokemon !== data) setPokemon(() => data)
    }

    if (pokemon.length === 0) getPokemon()

    console.log(pokemon)


    if (localStorage.getItem("userId") === routeParams.id) {
        return (
            <div id="user-pokemon">
                <h1 className="title">Your Pokemon</h1>
                <div className="card-container">
                    {                
                        pokemon.map(e => (<PokemonCard image={e.poke_name}
                            key={e.pokemon_id}
                            gender={e.gender}
                            pokedex={e.pokedex_num}
                            isShiny={e.is_shiny}
                            forTrade={e.for_trade}
                            type1={e.type1}
                            type2={e.type2}
                            nickname={e.nickname}
                            />))
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