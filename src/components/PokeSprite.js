import { useState } from 'react'
import axios from 'axios'
import './PokeSprite.css'

const PokeSprite = (props) => {
    const [image, setImage] = useState()
    axios.get(`https://pokeapi.co/api/v2/pokemon/${props.image}`)
    .then(res => {
        props.shiny ? setImage(res.data.sprites.front_shiny) : setImage(res.data.sprites.front_default)
    })
    .catch(err => console.log(err))
    return (
        <img className='sprite-img' src={image} alt="pokemon sprite" id={`${image}-image`}/>
    )
}

export default PokeSprite