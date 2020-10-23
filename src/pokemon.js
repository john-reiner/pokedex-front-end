import React from 'react'

export default function pokemon(props) {
    return (
        <div>
            <p>{props.name}</p>
            {props.addPokemon ? <button onClick={() => props.addPokemon(props.name)}>Add</button> : <button onClick={() => props.removePokemon(props.name)} >Remove</button>}
            
        </div>
    )
}
