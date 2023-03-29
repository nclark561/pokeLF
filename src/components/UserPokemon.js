import PokemonCard from "./PokemonCard.js"
import "./UserPokemon.css"

const UserPokemon = () => {
    const pokemon = 'mewtwo-mega-y'

    return (
        <div id="user-pokemon">
            <h1 className="title">Your Pokemon</h1>
            <div className="card-container">
                <PokemonCard image={pokemon} wish={false}/>
                <PokemonCard image="zoroark" wish={false}/>               
            </div>
            <h1 className="title">Looking For</h1>
            <div className="card-container">
                <PokemonCard image="zoroark" wish={true}/>
                <PokemonCard image="zoroark" wish={true}/>
            </div>
        </div>
    )
}

export default UserPokemon