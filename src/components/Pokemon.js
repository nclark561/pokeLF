import { useState } from 'react'
import axios from 'axios'

const PokeSprite = (props) => {
    const [image, setImage] = useState()
    axios.get(`https://pokeapi.co/api/v2/pokemon/${props.image}`)
    .then(res => {
        setImage(res.data.sprites.front_shiny)
    })
    .catch(err => console.log(err))
    return (
        <img src={image} alt="pokemon sprite"/>
    )
}

export default PokeSprite