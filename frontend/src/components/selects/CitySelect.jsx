import {useState} from 'react'
import {CitySelect, CountrySelect, StateSelect} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { useTranslation } from 'react-i18next';
  

export const CitySelectBlock = ({getCountryParams, getCityParams}) => {

    const {t} =  useTranslation();
    
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
                placeHolder={t("Wybierz kraj") + '...'}
            />
            <StateSelect
                countryid={countryid}
                onChange={(event) => {setstateid(event.id)}}
                placeHolder={t('Wybierz wojewódstwo') + '...'}
            />
            <CitySelect
                countryid={countryid}
                stateid={stateid}
                onChange={(event) => {getCityParams(event)}}
                placeHolder={t('Znajdź miasto') + '...'}
            />
            </div>
    )
}

