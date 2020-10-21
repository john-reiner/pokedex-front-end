import React, {useState, useEffect} from 'react';
import Pokemon from './pokemon'
import './App.css';

function App() {

  const [trainerName, setTrainerName] = useState('')
  const [trainerpin, setTrainerpin] = useState(0)
  const [pokemon, setPokemon] = useState('')

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(result => result.json())
    .then(pokemon => setPokemon(pokemon.results))
  }, [])

  const handleNameChange = (e) => setTrainerName(e.target.value)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you for sigining in ${trainerName} and using ${trainerpin} as your pin`)
  }

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder="Pokemon" onChange={handleNameChange}/>
        <input type="submit" value="Submit" />
      </form>
      <div><Pokemon pokemon={pokemon}/></div>
    </div>
  );
}

export default App;
