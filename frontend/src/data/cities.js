import { CountriesAtlas } from '@amplifiedhq/countries-atlas';
import mapCountriesData from "./countries.json";

export const getCitiesData = () => {
    const cityDataArray = [];

    Object.values(mapCountriesData.features).forEach((feature) => {
        const iso3 = feature.properties?.ISO_A3;
        
        if (iso3) {
            const country = CountriesAtlas.findByIso3(iso3);
            if (country) {
                const states = CountriesAtlas.getStates(country.code);
                states.forEach((state) => {
                    state.cities.forEach((city) => {
                        cityDataArray.push({
                            value: city.name,
                            label: city.name,
                            ...city // include other properties as is
                        });
                    });
                });
            } else {
                console.error(`Country with ISO3 code ${iso3} not found in CountriesAtlas.`);
            }
        }
    });

    return cityDataArray
};
