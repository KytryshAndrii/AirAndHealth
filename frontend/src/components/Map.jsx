import { MapContainer, TileLayer} from "react-leaflet"
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"
import L from "leaflet"
import { GeoJSON } from "react-leaflet"
import mapCountriesData from "../data/countries"
import { useState} from "react"
import { CountriesAtlas } from '@amplifiedhq/countries-atlas'
import { RecenterAutomatically } from "../utils/RecenterAutomatically"
import { Markers } from "./Markers"
import {CitySelectBlock} from "./selects/CitySelect";
import { SingleMarker } from "./Marker"
import { SideBar } from "./SideBar"
 
export const Map = () => {

    const [latLong, setLatLong] = useState([52.27998600, 17.35229390])
    
    const [countryStates, setCountryStates] = useState([])
    const [isSingleCityChosen, setIsSingleCityChosen] = useState(false)

    // useEffect(()=>{
    //   console.log(clickNumber)
    // },[clickNumber])

    let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
    })

    L.Marker.prototype.options.icon = DefaultIcon

    const style = () => {
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
        click: () => {
          setCountryStates([]);
          setLatLong([52.27998600, 17.35229390, 5])
        },
        dblclick: () =>{
            const chosenCountry = CountriesAtlas.findByIso3(country.properties.ISO_A3)
            setCountryStates(CountriesAtlas.getStates(chosenCountry.code));
            setLatLong([ chosenCountry.latitude,  chosenCountry.longitude, 6])
          }
      })
    }

    const handleCountrySelect = (country) => {
      console.log("country: ", country.longitude, country.latitude)
      setLatLong([country.latitude, country.longitude, 7])
    }

    const handleCitySelect = (city) => {
      console.log("city: ", city.longitude, city.latitude);
      setIsSingleCityChosen(true)
      setLatLong([city.latitude, city.longitude, 12])
    }

    return (
      <div>
        <SideBar/>
        <div className="fixed p-1  top-[4%] left-[50%] translate-x-[-50%] translate-y-[-7%] z-10000 w-[60%] h-14 bg-slate-950 shadow-gray-800 rounded-lg caret-transparent cursor-pointer">
          <CitySelectBlock getCountryParams={handleCountrySelect} getCityParams={handleCitySelect}/>
        </div>
        <MapContainer center={[52.27998600, 17.35229390]} zoom={5} scrollWheelZoom={true} preferCanvas={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON
            data={mapCountriesData}
            style={style}
            onEachFeature={getCountryProps}z
          />
          <RecenterAutomatically lat={latLong[0]} lng={latLong[1]} zoom={latLong[2]}/>
          {countryStates.length > 0 ? <Markers states={countryStates}/> :<></>}
          {isSingleCityChosen ? <SingleMarker lat={latLong[0]} lng={latLong[1]}/> :<></>}
        </MapContainer>
      </div>
    )
  }