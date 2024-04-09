import { useState} from 'react';
import { Country, State, City } from 'country-state-city';

export const LocationSelector = ({getCityObject}) => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    
    const countries = Country.getAllCountries();
    const states = selectedCountry ? State.getStatesOfCountry(selectedCountry.isoCode) : [];
    const cities = selectedState ? City.getCitiesOfState(selectedCountry.isoCode, selectedState.isoCode) : [];
  
    const handleCountryChange = (event) => {
      setSelectedCountry(JSON.parse(event.target.value));
      setSelectedState('');
      setSelectedCity('');
    };
  
    const handleStateChange = (event) => {
      setSelectedState(JSON.parse(event.target.value));
      setSelectedCity('');
    };
  
    const handleCityChange = (event) => {
      setSelectedCity(JSON.parse(event.target.value));
      getCityObject(JSON.parse(event.target.value))
    };
  
    return (
      <div className="flex space-x-2">
        <select className="w-40 h-10 px-2 py-1 border rounded" value={JSON.stringify(selectedCountry)} onChange={handleCountryChange}>
          <option value="">Select Country</option>
          {countries.map(country => (
            <option key={country.isoCode} value={JSON.stringify(country)}>
              {country.flag} {country.name}
            </option>
          ))}
        </select>
        <select className="w-40 h-10 px-2 py-1 border rounded" value={JSON.stringify(selectedState)} onChange={handleStateChange} disabled={!selectedCountry}>
          <option value="">Select State</option>
          {states.map(state => (
            <option key={state.isoCode} value={JSON.stringify(state)}>
              {state.name}
            </option>
          ))}
        </select>
        <select className="w-40 h-10 px-2 py-1 border rounded" value={JSON.stringify(selectedCity)} onChange={handleCityChange} disabled={!selectedState}>
          <option value="">Find City</option>
          {cities.map(city => (
            <option key={`${city.name}-${city.stateCode}`} value={JSON.stringify(city)}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    );
};