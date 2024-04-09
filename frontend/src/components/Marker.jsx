import {Marker, Popup} from "react-leaflet"
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"
import L from "leaflet"
import {AirQualityPopUpInfo} from './AirQuolityPopUpInfo'

export const SingleMarker = ({lat, lng, name}) => {

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  })

  L.Marker.prototype.options.icon = DefaultIcon

  return (
      <>
        <Marker position={[lat, lng]} icon={DefaultIcon} key={lat} riseOnHover={true}>
            <Popup>
              <AirQualityPopUpInfo latitude={lat} longitude={lng} name={name}/>
            </Popup>
        </Marker>
    </>
  )
}