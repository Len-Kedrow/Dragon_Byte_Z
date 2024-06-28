import React, { useEffect, useState }  from "react";
import axios from "axios"

    function PokeButton() {
        
      //const [type, setType] = useState("");      
      const [pokeImg, setPokeImg] = useState("")
      //const catchEmAll = []

      

      
        
      // const getPokemon = async () => { /* async will wait until API is called*/
      //   try {                         /* the response variable will have the fetched api  */
      //     let response = await axios.get("https://pokeapi.co/api/v2/pokemon/charizard");
      //     (setType(response))
      //     console.log(response)
          
      //   } catch (error) {
      //     console.error("An error occurred:", error)
      //   }
        
      // }


      /* as soon as you hit NPM RUN DEV, it will IMMEDIATELY FETCH THE IMAGE! BEHIND THE CURTAIN! */
      /* ON CLICK, YOU WILL CALL ANOTHER FUNCTION THAT WILL REVEAL THE API CALL */
      /* using useEffect to fetch api to set the pokemon Type  */
      async function FetchData() {
        try {
          let randomNum = Math.floor(Math.random() * 151); + 1// random num 1-100
          let response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${randomNum}`
          );
          //console.log(response);
          setPokeImg(response.data.sprites.front_default);
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }
      
      useEffect( () => { /* runs on render*/                                  /* len "i will give you this 5$ rachel, idk when. "*/
         FetchData();
      }, [])
      
      const curtainReveal = () => {
        let ImgElement = document.getElementById("insertPokemon")
        ImgElement.src = pokeImg
        // let container = document.getElementById("container");
        // container.innerHTML = '<img src={pokeImg}></img>';
        // let ElementImg = document.createElement('img')
       
        // ElementImg.src = pokeImg //link
        //container.append(ElementImg) //link
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