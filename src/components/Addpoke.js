import React from 'react'
import axios from 'axios'
import './Addpoke.css'

function Addpoke(props) {

    const addMon = evt => {
        evt.preventDefault()

        const pokemon = document.getElementById('pokemon-in').value
        const nickname = document.getElementById('nickname-in').value
        const genderIn = document.getElementById('gender-in').value
        const shinyIn = document.getElementById('shiny-in').value
        const tradeIn = document.getElementById('trade-in').value
        const id = localStorage.getItem("userId")

        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(res => {
                const {data} = res

                let type2 = null

                if (data.types.length > 1) {
                    type2 = data.types[1].type.name
                }
                const maBod = {
                    pokedex: data.id,
                    name: pokemon,
                    nickname: nickname,
                    type1: data.types[0].type.name,
                    type2: type2,
                    gender: genderIn,
                    isShiny: shinyIn,
                    forTrade: tradeIn
                }
                axios.post(`/user-pokemon/${id}`, maBod)
                    .then(res => console.log(`${pokemon} added`))
                    .catch(err => console.log(err))
            })
            .catch(err => {
                console.log(err)
                alert('invalid input')
            })

        document.getElementById('pokemon-in').value = ''
        document.getElementById('nickname-in').value = ''
        document.getElementById('gender-in').value = ''
        document.getElementById('shiny-in').value = ''
        document.getElementById('trade-in').value = ''
    } 

  return (props.trigger) ? (
    <div className='popup'>
        <form className='popup-inner' onSubmit={addMon}>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
            <label htmlFor="pokemon">Pokemon:</label>
            <input placeholder='pokemon' name="pokemon" className='add-text' id="pokemon-in" required></input>
            <label htmlFor="nickname">Nickname:</label>
            <input placeholder='nickname' name="nickname" className='add-text' id="nickname-in"></input>
            <div>
                <label htmlFor="gender">Gender:</label>
                <select name='gender' className='add-form' id="gender-in" required>
                    <option defaultValue="" disabled>Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value={null}>Genderless</option>
                </select>
                <label htmlFor="shiny">Shiny:</label>
                <select name='shiny' className='add-form' id="shiny-in" required>
                    <option defaultValue="" disabled>Is shiny?</option>
                    <option value={true}>Shiny</option>
                    <option value={false}>Not Shiny</option>
                </select>
                <label htmlFor="trade">For Trade:</label>
                <select name='trade' className='add-form' id="trade-in" required>
                    <option defaultValue="" disabled>For trade?</option>
                    <option value={true}>Is for trade</option>
                    <option value={false}>Not for trade</option>
                </select>
            </div>
            <button type="submit" className='add-submit'>Add Pokemon</button>
        </form>
    </div>
  ) : null
}

export default Addpoke