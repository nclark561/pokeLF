import React from 'react'
import axios from 'axios'
import './Addpoke.css'

function AddWish(props) {

    const addMon = evt => {
        evt.preventDefault()

        const pokemon = document.getElementById('w-pokemon-in').value
        const genderIn = document.getElementById('w-gender-in').value
        const shinyIn = document.getElementById('w-shiny-in').value
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
                    type1: data.types[0].type.name,
                    type2: type2,
                    gender: genderIn,
                    isShiny: shinyIn
                }
                axios.post(`/user-wish/${id}`, maBod)
                    .then(res => console.log(`${pokemon} added`))
                    .catch(err => console.log(err))
            })
            .catch(err => {
                console.log(err)
                alert('invalid input')
            })

        document.getElementById('w-pokemon-in').value = ''
        document.getElementById('w-gender-in').value = ''
        document.getElementById('w-shiny-in').value = ''
    }

  return (props.trigger) ? (
    <div className='popup'>
        <form className='popup-inner' onSubmit={addMon}>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
            <label htmlFor="pokemon">Pokemon:</label>
            <input placeholder='pokemon' name="pokemon" className='add-text' id="w-pokemon-in" required></input>
            <div>
                <label htmlFor="gender">Gender:</label>
                <select name='gender' className='add-form' id="w-gender-in" required>
                    <option defaultValue="" disabled>Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value={null}>Genderless</option>
                </select>
                <label htmlFor="shiny">Shiny:</label>
                <select name='shiny' className='add-form' id="w-shiny-in" required>
                    <option defaultValue="" disabled>Is shiny?</option>
                    <option value={true}>Shiny</option>
                    <option value={false}>Not Shiny</option>
                </select>
            </div>
            <button type="submit" className='add-submit'>Add Pokemon</button>
        </form>
    </div>
  ) : null
}

export default AddWish