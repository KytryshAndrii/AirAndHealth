import { MapContainer, TileLayer, useMap} from "react-leaflet"
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"
import L from "leaflet"
import { GeoJSON } from "react-leaflet"
import mapCountriesData from "../data/countries.json"
import { useState, useEffect } from "react"
import { CountriesAtlas } from '@amplifiedhq/countries-atlas'

const RecenterAutomatically = ({lat,lng}) => {
  const map = useMap();
   useEffect(() => {
     map.setView([lat, lng], 5.4);
   }, [lat, lng]);
   return null;
 }

export const Map = () => {

  const [latLong, setLatLong] = useState([0, 0])

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  })

  L.Marker.prototype.options.icon = DefaultIcon

  function style() {
    return {
      fillColor: "transparent",
      weight: 1,
      opacity: 1,
      color: "blue", //Outline color
      fillOpacity: 1
    }
  }

  const getCountryProps = (country, layer) => {
    layer.on({
      click: (event) =>{
        const chosenCountry = CountriesAtlas.findByIso3(country.properties.ISO_A3)
       setLatLong([ chosenCountry.latitude,  chosenCountry.longitude])
      }
    })
  }

  return (
    <MapContainer center={[30, 10]} zoom={3} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON
        data={mapCountriesData}
        style={style}
        onEachFeature={getCountryProps}
      />
      <RecenterAutomatically lat={latLong[0]} lng={latLong[1]}/>
    </MapContainer>
  )
}