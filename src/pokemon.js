import React from 'react'

export default function pokemon(props) {

    const renderPokemon = () => {
        if (props.showCasePokemon) {
            return props.showCasePokemon.map(pokemon => {
                return <p>{pokemon}</p>
                
            })
        }
    }
    return (
        <div>
            {renderPokemon()}
        </div>
    )
}
