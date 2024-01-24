import { useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import Map from './components/map'
import './App.css'

function App() {

function apiCall(){


  async function fetchData(){

    const response = await fetch('http://localhost:7002')
    let data = await response.json()
    data = data.data
    console.log(data)
  }

  fetchData()
}


  return (
    <>
      <p> In Sheffield </p>
      <button onClick={apiCall} >click me</button>
        <Map/>
    </>
  )
}

export default App
