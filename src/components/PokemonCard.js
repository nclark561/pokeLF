import PokeSprite from "./PokeSprite.js";
import './PokemonCard.css'

const PokemonCard = (props) => {
    const pokeName = props.image.charAt(0).toUpperCase() + props.image.replace(/^./, '')
    const pokedexNum = 571;
    const nickname = '';
    const type1 = 'dark';
    const type2 = null;
    const isShiny = true;
    
    return (
        <div className="card-div">
            <div>
                <div className="image-div">
                    <PokeSprite image={props.image}/>
                </div>
                <div className="type-div">
                    <img src={`https://www.serebii.net/pokedex-bw/type/${type1}.gif`} alt='type image' className="type-image"/>
                    {type2 ? <img src={`https://www.serebii.net/pokedex-bw/type/${type2}.gif`} alt='type image' className="type-image"/> : null}
                </div>
            </div>
            <div>
                <h2 className="card-h2">#{pokedexNum} {pokeName}</h2>
                <ul className="card-list">
                    <li>Nickname: </li>
                    <li>Gender: </li>
                    <li>Shiny: </li>
                    <li>For Trade: </li>
                </ul>
            </div>
        </div>
    )
}

export default PokemonCard