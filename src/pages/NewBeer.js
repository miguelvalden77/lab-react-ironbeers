import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from '../components/Header'
import axios from "axios"

function NewBeer() {

  const [data, setData] = useState({name: "", tagline: "", attenuation_level: 0, brewers_tips: "", contributed_by: "", first_brewed: "", description: ""})

  const dataChange = e => setData({...data, [e.target.name]: e.target.value})

  const handleSubmit =(e=>{
    e.preventDefault()
    const body = { name: data.name, tagline: data.tagline, attenuation_level: data.attenuation_level, brewers_tips: data.brewers_tips, contributed_by: data.contributed_by, first_brewed: data.first_brewed, description: data.description }

    axios
    .post(`https://ih-beers-api2.herokuapp.com/beers/new`, body)
    .then(res=>{
      setData({name: "", tagline: "", attenuation_level: 0, brewers_tips: "", contributed_by: "", first_brewed: "", description: ""})
      console.log(res)
    })

  })
  
  return (
    <div>
        <Header/>
        <form onSubmit={handleSubmit}>

          <input onChange={dataChange} value={data.name} type="text" name='name' />
          <input onChange={dataChange} value={data.tagline} type="text" name='tagline' />
          <input onChange={dataChange} value={data.description} type="text" name='description' />
          <input onChange={dataChange} value={data.first_brewed} type="text" name='first_brewed' />
          <input onChange={dataChange} value={data.attenuation_level} type="number" name='attenuation_level'/>
          <input onChange={dataChange} value={data.contributed_by} type="text" name='contributed_by'/>
          <input onChange={dataChange} value={data.brewers_tips} type="text" name='brewers_tips'/>

          <button type='submit'>Enviar</button>

        </form>
    </div>
  )
}

export default NewBeer