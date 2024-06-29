import React, { useEffect, useState }  from "react";
import axios from "axios"

    function PokeButton() {
        
      const [type, setType] = useState(""); //This will hold the typ of Pokemon we pull      
      const [pokeImg, setPokeImg] = useState("")
      const catchEmAll = []

      //function to get a random Pokemon. Need to build out so builds team of single type
      const FetchData = async () => { 
        try {                         
          let randomNum = Math.floor(Math.random() * 151); + 1// random num 1-100
          let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
          (setType(response))
          console.log(response)
          setPokeImg(response.data.sprites.front_default);
        } catch (error) {
          console.error("An error occurred:", error)
        }
        
      }
      
      //On render FetchData() will grab the first team of Pokemon
      useEffect( () => { 
         FetchData();
      }, [])
      
      //Used to reveal pokemon to screen
      const curtainReveal = () => {
        let ImgElement = document.getElementById("insertPokemon")
        ImgElement.src = pokeImg
      
      }
    
    return (
      <>
        <button onClick={()=>FetchData()}>Press Me</button>
        {/* <div id="container"></div> */}
        <br></br>
        <img src = {pokeImg}></img>
      </>
    );

    }
    
export default PokeButton;