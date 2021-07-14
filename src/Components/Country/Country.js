import styled from 'styled-components';

const CountryContainer = styled.div`
    display: flex;
    align-items: stretch;
    flex-direction: column;
    margin-top: 3rem;
    width: 80%;
    box-shadow: ${props => props.isDarkModeOn ? '0' : '0px 0px 0.5rem lightgray'};
    background-color: ${props => props.isDarkModeOn ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
    border-radius: 5px;
    overflow: hidden;

    @media only screen and (min-width: 855px) {
        width: 25%;
        margin: 1rem 2rem;
    }

    @media only screen and (min-width: 1160px) {
        width: 20%;
    }
    
    & img {
        width: 100%;
    }
`;

const Informations = styled.div`
    padding: 1rem 2rem;
    padding-bottom: 3rem;

    & h2 {
        margin-bottom: 1rem;

        &:hover {
            cursor: pointer;
        }
    }

    & p {
        padding: 0.2rem 0;
    }

    & span {
        font-weight: 600;
    }
`

export function Country(props) {

    const country = props.country;

    return(
        <CountryContainer isDarkModeOn={props.isDarkModeOn}>
           <img src={props.flag} />
           <Informations>
               <h2 onClick={() => props.showDetails(country)}>{props.name}</h2>
               <p><span>Population: </span>{props.population}</p>
               <p><span>Region: </span>{props.region}</p>
               <p><span>Capital: </span>{props.capital}</p>
           </Informations>
        </CountryContainer>
    )
}