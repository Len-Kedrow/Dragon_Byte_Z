import { useState } from 'react'
import './App.css'
import PokeButton from './componenets/PokeButton'
import pokedex from "src/assets/pokedex.png"

function App() {
  return (
    <>
    <div><img src = {pokedex}></img></div>
      <p>PokePals!!!</p>
      <PokeButton></PokeButton>
    </>
  )
}

export default App


