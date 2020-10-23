import React, {useState, useEffect} from 'react';
import Pokemon from './pokemon'
import SixPokemon from './sixPokemon'
import './App.css';

function App() {

  const [pokemonSearch, setPokemonSearch] = useState('')
  const [pokemon, setPokemon] = useState([])
  const [showCasePokemon, setShowCasePokemon] = useState([])
  const [sixPokemon, setsixPokemon] = useState([])

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
        pokemonToShow.push(pokemon.name)
      }
    });
    setShowCasePokemon(pokemonToShow)
  }

  const addPokemon = (name) => {
    
    if (sixPokemon.length < 6) {
      setsixPokemon([...sixPokemon, name])
      
    } else {
      alert("no more than 6")
    }
    
  }

  


  return (
    <div className="App">
      <h1>Pokedex</h1>
      <SixPokemon sixPokemon={sixPokemon} />
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder="Pokemon" onChange={handleSearchChange}/>
        <input type="submit" value="Submit" />
      </form>
      <div><Pokemon addPokemon={addPokemon} showCasePokemon={showCasePokemon}/></div>
    </div>
  );
}

export default App;
