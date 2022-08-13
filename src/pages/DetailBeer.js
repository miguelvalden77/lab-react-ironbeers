import axios from "axios";
import { useEffect } from "react"
import { useState } from "react"
import {useParams} from "react-router-dom"


function DetailBeer() {

    const [beer, setBeer] = useState({})
    const [isFetching, setIsFetching] = useState(true)

    const { beerId } = useParams();

    // const foundBeer = projectsData.find((oneProject) => {  
    //     return oneProject._id === beerId;
    //   });

    
    useEffect(()=>{
        
        getData()
        
    }, [])

    const getData = async ()=>{
        const cerveza = await axios(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        setBeer(cerveza.data)
        setIsFetching(false)
    }

    if(isFetching === true){
        return <h1>Cargando ...</h1>
    }
    
  return (
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
  )
}

export default DetailBeer