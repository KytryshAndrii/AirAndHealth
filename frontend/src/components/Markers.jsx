import {Marker, Popup} from "react-leaflet"
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"
import L from "leaflet"
export const Markers = ({states}) => {

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  })

  L.Marker.prototype.options.icon = DefaultIcon

  return (
      <>
        {states.map((element) => (
          element.cities.map((city)=>(
            <Marker position={[city.latitude, city.longitude]} icon={DefaultIcon} key={city.name} riseOnHover={true}>
              <Popup>
                {city.name} is for popup with lat: {city.latitude} and lon {city.longitude}
              </Popup>
            </Marker>
          ))
        ))}
    </>
  )
}