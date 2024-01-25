
import {  useMapEvents} from 'react-leaflet'

export default function MapClick() {
    const map = useMapEvents({
      click: () => {
        map.locate()
      },
      locationfound: (location) => {
        console.log('location found:', location)
      },
    })
    return null
  }