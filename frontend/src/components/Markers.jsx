import {Marker, Popup, useMapEvents, useMap} from "react-leaflet"
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"
import L from "leaflet"
import {useState} from "react"

export const Markers = ({states}) => {

  const [zoom, setZoom] = useState(0);
  const [isStateSelected, setIsStateSelected] = useState(false)
  const [selectedState, setSelectedState] = useState(null)

  const map = useMap();
  useMapEvents({
    zoomend() { // zoom event (when zoom animation ended)
      const zoom = map.getZoom(); // get current Zoom of map
      setZoom(zoom);
      console.log(zoom)
    },
  });

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  })

  L.Marker.prototype.options.icon = DefaultIcon

  return (
      <>
        {states.map((state) => (
            <Marker position={[state.latitude, state.longitude]} icon={DefaultIcon} key={state.name} riseOnHover={true} eventHandlers={{
              click: () => {setSelectedState(state); setIsStateSelected(true)},}}>
            </Marker>
        ))}
        {zoom > 8? 
            states.map((state)=>(state.cities.map((city)=>(
              <Marker position={[city.latitude, city.longitude]} icon={DefaultIcon} key={city.name} riseOnHover={true}>
                <Popup>
                  {city.name} is for popup with lat: {city.latitude} and lon {city.longitude}
                </Popup>
              </Marker>
        )))) :<></>}
        {isStateSelected ? 
            selectedState.cities.map((city)=>(
              <Marker position={[city.latitude, city.longitude]} icon={DefaultIcon} key={city.name} riseOnHover={true}>
                <Popup>
                  {city.name} is for popup with lat: {city.latitude} and lon {city.longitude}
                </Popup>
              </Marker>
        )) :<></>}
    </>
  )
}