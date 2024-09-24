import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function Sidebar() {

  const [allPokemon, setAllPokemon] = useState(null)

  useEffect(()=>{
    
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response)=>{
      //pasamos los datos a un json
      return response.json()
    })
    .then((data)=>{
    console.log(data)
    setAllPokemon(data.results)
    })
    .catch((error)=>{
      console.log(response)
    })
  }, [])

  /* aqui vamos a crear clausula de guardia*/
  

  return (
    <nav className="sidebar">

      <h5>Elige un Pokemon</h5>
      
      {/*  ESTO ES UN COMPONENTE QUE TOMA DATOS DE FUENTE EXTERNA
      
      Estos componentes tendrán todos una estructura parecida

      aqui nos hacemos vrias preguntas:

      -de donde sacamos la data - de la api de pokemon
      para ello utilizaremos fetch, pendo todo el rato la llamada 
      pero donde? si lo ponemos dentro de la función de Sidebar estará lanzandose todo el rato

      hariamos un ciclo de vida para asegurarnos de que solo se trae la data en un momento, el componentDidMount.

      Que necesita este componente? solo los nombres, por lo que no le pediremos toda la data si no solo la informacion que necesitamos
      En este ejmplo nuestro array es estático, no va creciendo 
      Ademas podemos sobrecargar memoria si pedimos de mas

      -como nos anclamos a esa tranferencia de llegada de data



      -en que momento hacemos la operacion
      -que hacemos con esa data? */}

      {/* example of 3 links */}
    {/*   <Link to={"/"}>bulbasaur</Link>
      <Link to={"/"}>charmander</Link>
      <Link to={"/"}>squirtle</Link> */}


      { (allPokemon !== null) ?
      allPokemon.map((eachPokemon) =>{
        return (
          <Link
          key= {eachPokemon.name} to={`/pokemon-details/${eachPokemon.name}`}>{eachPokemon.name}</Link>
        )
      }) : <h3>...buscando Pokemons</h3>
    }

    </nav>
  )
}

export default Sidebar