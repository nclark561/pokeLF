import React from 'react'
import './Addpoke.css'

function Addpoke(props) {

    const addMon = evt => {
        evt.preventDefault()
    } 

  return (props.trigger) ? (
    <div className='popup'>
        <form className='popup-inner' onSubmit={addMon}>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
            <label htmlFor="pokemon">Pokemon:</label>
            <input placeholder='pokemon' name="pokemon" className='add-text' required></input>
            <label htmlFor="nickname">Nickname:</label>
            <input placeholder='nickname' name="nickname" className='add-text'></input>
            <div>
                <label htmlFor="gender">Gender:</label>
                <select name='gender' className='add-form' required>
                    <option defaultValue="" disabled>Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value={null}>Genderless</option>
                </select>
                <label htmlFor="shiny">Shiny:</label>
                <select name='shiny' className='add-form' required>
                    <option defaultValue="" disabled>Is shiny?</option>
                    <option value={true}>Shiny</option>
                    <option value={false}>Not Shiny</option>
                </select>
                <label htmlFor="trade">For Trade:</label>
                <select name='trade' className='add-form' required>
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