import React, {useState, useEffect} from 'react';
import PokemonSearch from './pokemonSearch'
import PokemonShowPage from './pokemonShowPage'
import './App.css';

function App() {

  const [pokemonSearch, setPokemonSearch] = useState('')
  const [pokemon, setPokemon] = useState([])
  const [showCasePokemon, setShowCasePokemon] = useState([])
  const [pokemonToShow, setpokemonToShow] = useState({})

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=9999')
    .then(result => result.json())
    .then(pokemon => setPokemon(pokemon.results))
  }, [])

  const handleSearchChange = (e) => setPokemonSearch(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    let pokemonToShow = []
    pokemon.forEach(pokemon => {
      if (pokemon.name.includes(pokemonSearch)) {
        pokemonToShow.push(pokemon)
      }
    });
    setShowCasePokemon(pokemonToShow)
  }

  const showPokemon = (name) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(results => results.json())
    .then(pokemon => setpokemonToShow(pokemon))
  }

  // console.log(pokemonToShow)

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <PokemonShowPage pokemonToShow={pokemonToShow} />
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder="Pokemon" onChange={handleSearchChange}/>
        <input type="submit" value="Submit" />
      </form>
      <div><PokemonSearch showPokemon={showPokemon} showCasePokemon={showCasePokemon}/></div>
    </div>
  );
}

export default App;
