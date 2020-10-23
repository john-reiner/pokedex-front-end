import React from 'react'

export default function sixPokemon(props) {


    const renderMyPokemon = () => {
        if (props.sixPokemon) {
            return props.sixPokemon.map(pokemon => {
                return <p>{pokemon}</p>
            })
        }
    }

    return (
        <div>
            <h2>My Six Pokemon</h2>
            {renderMyPokemon()}
        </div>
    )
}
