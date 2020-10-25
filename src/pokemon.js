import React from 'react'

export default function pokemon(props) {
    if (props.showPokemon) {
        return (
            <div>
                <p>{props.name}</p>
                <button onClick={() => props.showPokemon(props.name)} > Show </button>
            </div>
        )        
    } else {
        return (
            <div>
                <p>{props.id}</p>
                <p>{props.name}</p>
                <img src={props.image}/>
                {console.log(props)}
            </div>
        )        
    }


}
