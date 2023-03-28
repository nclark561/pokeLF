import PokeSprite from "./PokeSprite.js";
import './PokemonCard.css'

const PokemonCard = (props) => {
    const pokeName = props.image.charAt(0).toUpperCase() + props.image.replace(/^./, '')
    const pokedexNum = 392;
    const nickname = 'monke';
    const type1 = 'fire';
    const type2 = 'fighting';
    const isShiny = true;
    const gender = 'male';
    const forTrade = false;
    
    return (
        <div className="card-div">
            <div>
                <div className="image-div">
                    <PokeSprite image={props.image} shiny={isShiny}/>
                </div>
                <div className="type-div">
                    <img src={`https://www.serebii.net/pokedex-bw/type/${type1}.gif`} alt='type image' className="type-image"/>
                    {type2 ? <img src={`https://www.serebii.net/pokedex-bw/type/${type2}.gif`} alt='type image' className="type-image"/> : null}
                </div>
            </div>
            <div>
                <h2 className="card-h2">#{pokedexNum} {pokeName}</h2>
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