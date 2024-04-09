import {useState} from 'react'
import {CitySelect, CountrySelect, StateSelect} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
  

export const CitySelectBlock = ({getCountryParams, getCityParams}) => {
    
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);

    const handleCountrySelect =(event)=>{
        getCountryParams(event); 
        setCountryid(event.id);
    }

    return(
        <div className="flex flex-row w-full justify-around p-0">
            <CountrySelect
                onChange={(event) => {handleCountrySelect(event)}}
                placeHolder="Select your Country..."
            />
            <StateSelect
                countryid={countryid}
                onChange={(event) => {setstateid(event.id)}}
                placeHolder="Select your State..."
            />
            <CitySelect
                countryid={countryid}
                stateid={stateid}
                onChange={(event) => {getCityParams(event)}}
                placeHolder="Find your City..."
            />
            </div>
    )
}

