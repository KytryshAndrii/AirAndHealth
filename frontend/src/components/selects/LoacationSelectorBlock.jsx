import { useEffect, useState} from 'react';
import { Country, State, City } from 'country-state-city';
import { useTranslation } from 'react-i18next';

export const LocationSelector = ({getCityObject, isclear}) => {

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const {t} =  useTranslation();
    
    const countries = Country.getAllCountries();
    const states = selectedCountry ? State.getStatesOfCountry(selectedCountry.isoCode) : [];
    const cities = selectedState ? City.getCitiesOfState(selectedCountry.isoCode, selectedState.isoCode) : [];
  
    useEffect(()=>{
      setSelectedCity('')
      setSelectedCountry('')
      setSelectedState('')
    }, [isclear])

    const handleCountryChange = (event) => {
      if(event.target.value){
      setSelectedCountry(JSON.parse(event.target.value));
      setSelectedState('');
      setSelectedCity('');
      }
    };
  
    const handleStateChange = (event) => {
      if(event.target.value){
      setSelectedState(JSON.parse(event.target.value));
      setSelectedCity('');
      }
    };
  
    const handleCityChange = (event) => {
      if(event.target.value){
        setSelectedCity(JSON.parse(event.target.value));
        getCityObject(JSON.parse(event.target.value))
      }
    };
  
    return (
      <div className="flex space-x-2">
        <select className="w-40 h-10 px-2 py-1 border rounded" value={JSON.stringify(selectedCountry)} onChange={handleCountryChange}>
          <option value="">{t('Wybierz kraj')}</option>
          {countries.map(country => (
            <option key={country.isoCode} value={JSON.stringify(country)}>
              {country.flag} {country.name}
            </option>
          ))}
        </select>
        <select className="w-40 h-10 px-2 py-1 border rounded" value={JSON.stringify(selectedState)} onChange={handleStateChange} disabled={!selectedCountry}>
          <option value="">{t('Wybierz wojewódstwoe')}</option>
          {states.map(state => (
            <option key={state.isoCode} value={JSON.stringify(state)}>
              {state.name}
            </option>
          ))}
        </select>
        <select className="w-40 h-10 px-2 py-1 border rounded" value={JSON.stringify(selectedCity)} onChange={handleCityChange} disabled={!selectedState}>
          <option value="">{t('Znajdź miasto')}</option>
          {cities.map(city => (
            <option key={`${city.name}-${city.stateCode}`} value={JSON.stringify(city)}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    );
};