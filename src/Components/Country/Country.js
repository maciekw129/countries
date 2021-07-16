import styled from 'styled-components';

const CountryContainer = styled.div`
    display: flex;
    align-items: stretch;
    flex-direction: column;
    margin-top: 0rem;
    width: 80%;
    max-height: 420px;
    box-shadow: ${props => props.isDarkModeOn ? '0' : '0px 0px 0.5rem lightgray'};
    background-color: ${props => props.isDarkModeOn ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
    border-radius: 5px;
    overflow: hidden;
    transition: opacity 0.2s linear;

    &:hover {
        opacity:  70%;
        transition: opacity 0.2s linear;
        cursor: pointer;
    }

    @media only screen and (min-width: 855px) {
        width: 25%;
        margin: 1rem 2rem;
    }

    @media only screen and (min-width: 1160px) {
        width: 20%;
    }
    
    & img {
        width: auto;
        height: 40%;
        object-fit: cover;
    }
`;

const Informations = styled.div`
    padding: 1rem 2rem;
    padding-bottom: 3rem;
    height: 60%;

    & h2 {
        margin-bottom: 1rem;
    }

    & p {
        padding: 0.2rem 0;
    }

    & span {
        font-weight: 600;
    }
`

export function Country({ country, showDetails, isDarkModeOn }) {

    return(
        <CountryContainer isDarkModeOn={isDarkModeOn} onClick={() => showDetails(country)}>
           <img src={country.flag} />
           <Informations>
               <h2>{country.name}</h2>
               <p><span>Population: </span>{country.population}</p>
               <p><span>Region: </span>{country.region}</p>
               <p><span>Capital: </span>{country.capital}</p>
           </Informations>
        </CountryContainer>
    )
}