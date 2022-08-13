import Header from '../components/Header'
import axios from "axios"
import {useState, useEffect} from "react"

function RandomBeer() {

  const [beer, setBeer] = useState({})
  const [isFetching, setIsFetching] = useState(true)

  useEffect(()=>{
        
    getData()
    
}, [])

const getData = async ()=>{
    const cerveza = await axios(`https://ih-beers-api2.herokuapp.com/beers/random`)
    setBeer(cerveza.data)
    setIsFetching(false)
}

if(isFetching === true){
    return <h1>Cargando ...</h1>
}

  return (
    <div>
      <Header/>

      <div>
        <h3>Detail Beer</h3>
        
        
            <div key={beer._id}>
                <img src={beer.image_url} alt="foto" />
                <h4>{beer.name}</h4>
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <small>{beer.contributed_by}</small>
            </div>
        

    </div>

    </div>
  )
}

export default RandomBeer