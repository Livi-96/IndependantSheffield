import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents} from 'react-leaflet'
import MapClick from './MapClick'
import { useEffect, useState } from 'react'
import L from "leaflet";

const icon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-shadow.png"
  });


export default function Map(){

  const [markers, setMarkers] = useState([])

  useEffect(()=>{
    async function fetchMarkers(){
      let response = await fetch('http://localhost:7002')
      let data = await response.json()
      data = data.data
      setMarkers(data)
    }

    fetchMarkers()
  },[])

 function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        L.marker([lat, lng], { icon }).addTo(map);
        console.log(e.latlng.lat)
        async function addMarker(lat, lng){
         let marker = {lat, lng}
          //turn into JSON object
          let JSONdata = JSON.stringify(marker);
          //post new marker to the database
          let response = await fetch("http://localhost:7002", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSONdata, // body data type must match "Content-Type" header
          });
          console.log(response)
        }

        addMarker(e.latlng.lat, e.latlng.lng)
      }
    });
    return null;
  }
    return (<>
  <h1 id="map_title">Map</h1>
          <MapContainer center={[53.3773, -1.4634]} zoom={13} scrollWheelZoom={false} >
  <TileLayer 
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
{markers.map((mark) => {return <Marker     key={mark.id}
          position={[mark.lat, mark.lang]}></Marker>})}
      <MyComponent />
</MapContainer></>)
}