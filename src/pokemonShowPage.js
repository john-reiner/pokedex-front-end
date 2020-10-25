import React from 'react'
import Pokemon from './pokemon'

export default function sixPokemon(props) {


    const renderPokemon = () => {
        if (props.pokemonToShow.name) {
            console.log(props.pokemonToShow)
            return (
                <Pokemon 
                    key={props.pokemonToShow.id} 
                    id={props.pokemonToShow.id} 
                    name={props.pokemonToShow.name}
                    image={props.pokemonToShow.sprites.front_default}
                />
            )
            
        }
        
    }

    return (
        <div>
            {/* <Pokemon 
                key={props.pokemonToShow.id} 
                id={props.pokemonToShow.id} 
                name={props.pokemonToShow.name}
                // image={props.pokemonToShow.sprites.front_default}
                // color={props.pokemonToShow.color.name}
            /> */}
            {renderPokemon()}
        </div>
    )
}
