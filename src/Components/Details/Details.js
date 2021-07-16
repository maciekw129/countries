import styled from 'styled-components';

const DetailsContainer = styled.div`
    margin-top: 2rem;
    width: 85%;
    display: flex;
    flex-direction: column;
    padding-bottom: 4rem;

    @media only screen and (min-width: 800px) {
        margin-top: 8rem;
        flex-direction: row;
        align-items: center;
        width: 95%;
    }

    & img {
        width: 100%;
        margin-top: 3.5rem;

        @media only screen and (min-width: 800px) {
            width: 50%;
            margin-right: 6rem;
        }
    }
`
const InformationsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 100%;

    @media only screen and (min-width: 800px) {
        width: 50%;
    }

    & .informations {
        @media only screen and (min-width: 800px) {
            width: 50%;
        }
    }

    & .borderCountries {
        width: 100%;
    }

    & h1 {
        margin-top: 2.5rem;
        margin-bottom: 1.5rem;
        width: 100%;
    }

    & p {
        margin-bottom: 0.5rem;

        & span {
            font-weight: 600;
        }
    }
`

const Button = styled.button`
    align-self: flex-start;
    box-shadow: ${props => props.isDarkModeOn ? '0' : '0px 0px 0.5rem lightgray'};
    border-radius: 3px;
    border: 0px;
    background-color: ${props => props.isDarkModeOn ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
    color: ${props => props.isDarkModeOn ? 'hsl(0, 0%, 90%)' : 'hsl(112, 80, 0)'}; 
    padding: 0.5rem 1.75rem;
    margin-right: 0.5rem;
    margin-top: 1rem;
    transition: background-color 0.2s linear;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.isDarkModeOn ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'};
        transition: background-color 0.2s linear;
    }
`

const BackButton = styled(Button)`
    @media only screen and (min-width: 800px) {
        position: absolute;
        top: 6rem;
    }
`

export function Details({ country, detailsSwitcher, borderCountries, countryPicker, isDarkModeOn}) {

    return(
        <DetailsContainer>
            <BackButton isDarkModeOn={isDarkModeOn} onClick={detailsSwitcher}>Back</BackButton>
            <img src={country.flag} />
            <InformationsContainer>
                <h1>{country.name}</h1>
                <div className="informations">
                    <p><span>Native Name:</span> {country.nativeName}</p>
                    <p><span>Population:</span> {country.population}</p>
                    <p><span>Region:</span> {country.region}</p>
                    <p><span>Sub Region:</span> {country.subregion}</p>
                    <p><span>Capital:</span> {country.capital}</p>
                    <br/>
                </div>
                <div className="informations">  
                    <p><span>Top Level Domain:</span> {country.topLevelDomain}</p>
                    <p><span>Currencies:</span> {country.currencies.map((currency, index) => {
                        return (index === 0) ? currency.name : `, ${currency.name}`
                    })}</p>
                    <p><span>Languages:</span> {country.languages.map((language, index) => {
                        return (index === 0) ? language.name : `, ${language.name}`
                        })}
                    </p>
                    <br />
                </div>
                <div className="borderCountries">  
                    {borderCountries ? <h4>Border Countries:</h4> : null}
                    {borderCountries ? borderCountries.map((country, index) => {
                        return <Button isDarkModeOn={isDarkModeOn} key={index} onClick={() => countryPicker(country)} >{country.name}</Button>
                    })
                    : null }  
                </div>
            </InformationsContainer>      
        </DetailsContainer>
    )
}