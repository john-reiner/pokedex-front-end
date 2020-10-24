import React from 'react'
import Pokemon from './pokemon'

export default function sixPokemon(props) {

    console.log(props)
    return (
        <div>
            <Pokemon 
                key={props.pokemonToShow.id} 
                id={props.pokemonToShow.id} 
                name={props.pokemonToShow.name} 
            />
        </div>
    )
}
