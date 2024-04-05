import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"
import L from "leaflet"
import { GeoJSON } from "react-leaflet"
import mapCountriesData from "../data/countries.json"
import { useState, useEffect } from "react"
import { CountriesAtlas } from '@amplifiedhq/countries-atlas'
import { RecenterAutomatically } from "../utils/RecenterAutomatically"
import { Markers } from "./Markers"

  export const Map = () => {

    const [latLong, setLatLong] = useState([52.27998600, 17.35229390])
    
    const [countryStates, setCountryStates] = useState([])

    // useEffect(()=>{
    //   console.log(countryStates)
    // },[countryStates])

    let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
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
        click: () =>{
          const chosenCountry = CountriesAtlas.findByIso3(country.properties.ISO_A3)
          console.log(CountriesAtlas.getStates(chosenCountry.code))
          setCountryStates(CountriesAtlas.getStates(chosenCountry.code));
          setLatLong([ chosenCountry.latitude,  chosenCountry.longitude])
        }
      })
    }

    return (
      <MapContainer center={[52.27998600, 17.35229390]} zoom={3} scrollWheelZoom={true}>
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
        {countryStates.length >0 ? <Markers states={countryStates}/> :<></>}
      </MapContainer>
    )
  }