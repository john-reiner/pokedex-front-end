import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [trainerName, setTrainerName] = useState('')
  const [trainerpin, setTrainerpin] = useState('')

  const handleChange = (e) => setTrainerName(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(trainerName)
  }

  return (
    <div>
      <h1>Pokedex</h1>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder="Name" onChange={handleChange}></input>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
