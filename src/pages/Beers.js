import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Beers({peticion}) {

    const [beers, setBeers] = useState([])

    useEffect(()=>{
        fetch("https://ih-beers-api2.herokuapp.com/beers")
        .then(response=> response.json()) 
        .then(data=> setBeers(data))
        .catch(error=>console.log(error))
    }, [peticion])

  return (
    <div>
        <Header/>
        <h3>Beers</h3>
        {
        beers.map(e=>{
            return <div key={e._id}>
                <img width={200} height={300} src={e.image_url} alt="foto" />
                <h4>{e.name}</h4>
                <p>{e.tagline}</p>
                <small>{e.contributed_by}</small>
                <Link to={`/beers/${e._id}`}>Details</Link>
            </div>
        })
        }
    </div>
  )
}

export default Beers