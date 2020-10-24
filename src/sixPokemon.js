import React from 'react'
import Pokemon from './pokemon'

export default function sixPokemon(props) {


    const renderMyPokemon = () => {
        if (props.sixPokemon) {
            return props.sixPokemon.map(pokemon => {
                return <Pokemon removePokemon={props.removePokemon} name={pokemon} />
            })
        }
    }

    return (
        <div>
            <h2>My Six Pokemon</h2>
            {/* {renderMyPokemon()} */}
        </div>
    )
}
