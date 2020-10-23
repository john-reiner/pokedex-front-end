import React from 'react'

export default function pokemon(props) {

    const renderPokemon = () => {
        if (props.showCasePokemon) {
            return props.showCasePokemon.map(pokemon => {
                return (
                    <div className="pokemon" >                    
                        <p>{pokemon}</p>
                        <button onClick={() => props.addPokemon(pokemon)}>Add</button>
                    </div>

                    )
                
            })
        }
    }
    return (
        <div>
            {renderPokemon()}
        </div>
    )
}
