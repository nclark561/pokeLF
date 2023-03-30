import React, {useEffect, useState} from 'react'
import PokemonCard from "./PokemonCard.js"
import "./UserPokemon.css"


const UserPokemon = () => {
    const pokemon = ['mewtwo-mega-y', 'zoroark']
    const wishlist = ['scrafty', 'floette', 'shaymin-land']
    const [userId, setUserId] = useState()

    useEffect(() => {
        axios.get(`/user-id/${localStorage.getItem("email")}`)
        .then((res) => {
            setUserId(res.data)
        })
    }, [])

    return (
        <div id="user-pokemon">
            <h1 className="title">Your Pokemon</h1>
            <div className="card-container">
                {                
                    pokemon.map(e => (<PokemonCard image={e}/>))
                }              
            </div>
            <h1 className="title">Looking For</h1>
            <div className="card-container">
                {
                    wishlist.map(e => (<PokemonCard image={e} wish={true}/>))
                }
            </div>
        </div>
    )
}

export default UserPokemon