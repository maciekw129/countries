import styled from 'styled-components';
import { useState } from 'react';

import { Details } from '../Details/Details.js';
import { Country } from '../Country/Country.js';

const CountriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 3rem;

    @media only screen and (min-width: 800px) {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: stretch;
    }
`
 
export function Countries(props) {

    const data = props.fullData;

    const [country, setCountry] = useState(null);
    const [borderCountries, setBorderCountries] = useState(null);

    const countryPicker = (pickedCountry) => {
        setCountry(pickedCountry);
        let filtered;
        if(pickedCountry.borders.length === 0) {
            filtered = null;
        } else {
        
        filtered = data.filter((country) => 
            pickedCountry.borders.includes(country.alpha3Code)
        )
        }
        setBorderCountries(filtered);
        window.scrollTo(0, 0);
    }

    const showDetails = (pickedCountry) => {
        props.detailsSwitcher();
        countryPicker(pickedCountry);
    }

    return(
        <CountriesContainer>
            {props.showDetails ?
            <Details 
                country={country} 
                detailsSwitcher={props.detailsSwitcher} 
                borderCountries={borderCountries} 
                countryPicker={countryPicker} 
                isDarkModeOn={props.isDarkModeOn}
                />
            : props.data.map((country, index) => 
            <Country 
                key={index}
                country={country}
                showDetails={showDetails}
                name={country.name}
                flag={country.flag}
                population={country.population}
                region={country.region}
                capital={country.capital}
                isDarkModeOn={props.isDarkModeOn}
            />
            )}
        </CountriesContainer>
    )
}