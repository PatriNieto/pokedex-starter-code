import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function PokemonsPage() {

  const params = useParams()

/*1. hacer el estado */ 
const [pokemonDetails, setPokemonsDetails] = useState(null)

// 2. el componentDidMount para llamar a la API

useEffect(()=>{

  getData()

}, [params.pokeName])

//3.llamada a la API
//para utilizasr una funcion asincrona vamos a hacer un pequeño truco, declaramos fuera del setEffect

const getData = async () =>{
  //metemos aqui el fetch para hacerlo de manera asincrona
  try {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokeName}`)
  const data = await response.json()
  console.log(data)
  setPokemonsDetails(data)
  } catch (error) {
    console.log(error)
  }

}

if(pokemonDetails === null ){
return <h3>buscando detalles...</h3>
} 
  return (
    <>
    <div>PokemonsPage</div>

    <h4>Detalles del Pokemon</h4>
    <div>
      <h3>{pokemonDetails.name}</h3>
      <img src={pokemonDetails.sprites.front_default} alt="" />
    </div>
    </>
  )
}

export default PokemonsPage