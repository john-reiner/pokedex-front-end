import React from 'react'

export default function pokemon(props) {
    return (
        <div>
            <p>{props.name}</p>
            <button onClick={() => props.showPokemon(props.name)} > Show </button>
            
        </div>
    )
}
