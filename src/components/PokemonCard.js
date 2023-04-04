import axios from 'axios'
import PokeSprite from "./PokeSprite.js";
import './PokemonCard.css'

const PokemonCard = (props) => {
    const firstName = props.image.split('-')[0] + (props.image.split('-')[1] === 'oh' ? '-' + props.image.split('-')[1] : '')
    const pokeName = firstName.charAt(0).toUpperCase() + firstName.replace(/^./, '')
    const isWish = props.wish;

    const handleDelete = async () => {
        if (props.wish) {
            await axios.delete(`/user-wish/${props.id}`)
            props.refresh()
        } else {
            await axios.delete(`/user-pokemon/${props.id}`)
            props.refresh()
        }
    }
    
    return (
        <div className="btn-div" id={props.id}>
            <div className="card-div">
                <div>
                    <div className="image-div">
                        <PokeSprite image={props.image} shiny={props.isShiny}/>
                    </div>
                    <div className="type-div">
                        <img src={`https://www.serebii.net/pokedex-bw/type/${props.type1}.gif`} alt='type1' className="type-image"/>
                        {props.type2 ? <img src={`https://www.serebii.net/pokedex-bw/type/${props.type2}.gif`} alt='type2' className="type-image"/> : null}
                    </div>
                </div>
                <div>
                    <h3 className="card-h">#{props.pokedex} {pokeName}</h3>
                    <ul className="card-list">
                        {!isWish ? <li>Nickname: {props.nickname ? props.nickname : 'no nickname'}</li> : null}
                        <li>Gender: {props.gender ? props.gender : (isWish ? 'any' : 'none')}</li>
                        <li>Shiny: {props.isShiny ? 'yes' : 'no'}</li>
                        {!isWish ? <li>For Trade: {props.forTrade ? 'yes' : 'no'}</li> : null}
                    </ul>
                </div>
            </div>
            <div className="other-btn">
            <button className="delete-btn" onClick={handleDelete}>Delete Pokemon</button>
            </div>
        </div>
    )
}

export default PokemonCard