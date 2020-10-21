import React from 'react'

export default function pokemon(props) {

    const renderPokemon = () => {
        if (props.pokemon) {
            return props.pokemon.map(pokemon => {
                return <p>{pokemon.name}</p>
            })
        }
        
    }
    return (
        <div>
            {renderPokemon()}
        </div>
    )
}
