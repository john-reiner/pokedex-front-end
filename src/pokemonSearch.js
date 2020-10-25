import React from 'react'
import Pokemon from './pokemon'

export default function pokemon(props) {

    const renderPokemon = () => {
        if (props.showCasePokemon) {
            return props.showCasePokemon.map(pokemon => {
                return <Pokemon key={pokemon.id} showPokemon={props.showPokemon} name={pokemon.name} />
                
            })
        }
    }
    return (
        <div>
            {renderPokemon()}
        </div>
    )
}
