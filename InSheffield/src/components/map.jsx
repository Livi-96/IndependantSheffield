import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents} from 'react-leaflet'
import MapClick from './MapClick'
import { useState } from 'react'
import L from "leaflet";

const icon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-shadow.png"
  });

function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

export default function Map(){
 function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        L.marker([lat, lng], { icon }).addTo(map);
        console.log(e)
      }
    });
    return null;
  }
    return (<>
          <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} >
  <TileLayer 
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

      <MyComponent />
</MapContainer></>)
}