import React from 'react'
import Pokemon from './pokemon'

export default function pokemon(props) {

    const renderPokemon = () => {
        if (props.showCasePokemon) {
            return props.showCasePokemon.map(pokemon => {
                return <Pokemon name={pokemon} addPokemon={props.addPokemon} />
                
            })
        }
    }
    return (
        <div>
            {renderPokemon()}
        </div>
    )
}
