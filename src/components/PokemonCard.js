import PokeSprite from "./PokeSprite.js";
import './PokemonCard.css'

const PokemonCard = (props) => {
    const firstName = props.image.split('-')[0] + (props.image.split('-')[1] === 'oh' ? '-' + props.image.split('-')[1] : '')
    const pokeName = firstName.charAt(0).toUpperCase() + firstName.replace(/^./, '')
    const pokedexNum = 150;
    const nickname = 'Buu';
    const type1 = 'psychic';
    const type2 = null;
    const isShiny = false;
    const gender = null;
    const forTrade = false;
    
    return (
        <div className="card-div">
            <div>
                <div className="image-div">
                    <PokeSprite image={props.image} shiny={isShiny}/>
                </div>
                <div className="type-div">
                    <img src={`https://www.serebii.net/pokedex-bw/type/${type1}.gif`} alt='type1' className="type-image"/>
                    {type2 ? <img src={`https://www.serebii.net/pokedex-bw/type/${type2}.gif`} alt='type2' className="type-image"/> : null}
                </div>
            </div>
            <div>
                <h3 className="card-h">#{pokedexNum} {pokeName}</h3>
                <ul className="card-list">
                    <li>Nickname: {nickname ? nickname : null}</li>
                    <li>Gender: {gender ? gender : null}</li>
                    <li>Shiny: {isShiny ? 'yes' : 'no'}</li>
                    <li>For Trade: {forTrade ? 'yes' : 'no'}</li>
                </ul>
            </div>
        </div>
    )
}

export default PokemonCard