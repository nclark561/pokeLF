import React from 'react'
import './Addpoke.css'

function Addpoke(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <form className='popup-inner'>
            <button className='close-btn'>X</button>
            <label for="pokemon">Pokemon:</label>
            <input placeholder='pokemon' name="pokemon"></input>
            <label for="nickname">Nickname:</label>
            <input placeholder='nickname' name="nickname"></input>
            <div>
                <label for="gender">Gender:</label>
                <select name='gender' className='add-form'>
                    <option value="" disabled selected>Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value={null}>Genderless</option>
                </select>
                <label for="shiny">Shiny:</label>
                <select name='shiny' className='add-form'>
                    <option value="" disabled selected>Is shiny?</option>
                    <option value={true}>Shiny</option>
                    <option value={false}>Not Shiny</option>
                </select>
                <label for="trade">For Trade:</label>
                <select name='trade' className='add-form'>
                    <option value="" disabled selected>For trade?</option>
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