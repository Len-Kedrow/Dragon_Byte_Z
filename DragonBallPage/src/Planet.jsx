import { useState } from 'react'
import './App.css'
import PlantetButton from './components/PlanetButton'
import PlanetButton from './components/PlanetButton'
import PlanetCard from './PlanetCard'

function App() {
  
  return(    
    <>
      <div class="fixed-grid has-5-cols">
        <div class ="grid">
          <div><PlanetCard num={1}/></div>
          <div><PlanetCard num={2}/></div>
          <div><PlanetCard num={3}/></div>
          <div><PlanetCard num={4}/></div>
          <div><PlanetCard num={5}/></div>
          <div><PlanetCard num={6}/></div>
          <div><PlanetCard num={7}/></div>
          <div><PlanetCard num={8}/></div>
          <div><PlanetCard num={9}/></div>
          <div><PlanetCard num={10}/></div>
          <div><PlanetCard num={11}/></div>
          <div><PlanetCard num={12}/></div>
          <div><PlanetCard num={13}/></div>
          <div><PlanetCard num={14}/></div>
          <div><PlanetCard num={15}/></div>
          <div><PlanetCard num={16}/></div>
          <div><PlanetCard num={17}/></div>
          <div><PlanetCard num={18}/></div>
          <div><PlanetCard num={19}/></div>
          <div><PlanetCard num={20}/></div>
        </div>
      </div>
    </> 
        
     )

}

export default App

