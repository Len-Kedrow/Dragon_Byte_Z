import React, { useState }  from "react";
import axios from "axios"


const PlanetButton =() => {
    const [planetImg, setPlanetImg] = useState("")


//let randNum = Math.floor(Math.random() * 151); + 1// random num 1-100

//function to get planet data
const FetchData = async (int) => { 
    try {                         
      
      let response = await axios.get(`https://dragonball-api.com/api/planets/1`)
      //(setType(response))
      console.log(response)
      setPlanetImg(response.data.image);
    } catch (error) {
      console.error("An error occurred:", error)
    }
    
  }

  return (
    <>
      <button onClick={()=>FetchData()}>Get Planets</button>
      {/* Below line applies container css to button? TBR*/} 
       
      
      <img src = {planetImg}></img> 
    </>
  );
}
export default PlanetButton
