import styled from 'styled-components';

const FilterContainer = styled.div`
    
    & select {
        padding: 0.75rem 0.75rem;
        border-radius: 3px;
        border: 0;
        background-color: ${props => props.isDarkModeOn ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
        box-shadow: ${props => props.isDarkModeOn ? '0' : '0px 0.1rem 0.5rem lightgray'};
        color: ${props => props.isDarkModeOn ? 'hsl(0, 0%, 90%)' : 'hsl(112, 80, 0)'};

        &:hover {
            cursor: pointer;
        }

        &:focus {
            outline: none;
            border: none;
        }
    }
`;

export function Filter(props) {
    return(
        <FilterContainer isDarkModeOn={props.isDarkModeOn}>
            <select onChange={props.filter}>
                <option value='' hidden defaultValue>Filter by Region</option>
                <option value='world'>Whole World</option>
                <option value='Africa'>Africa</option>
                <option value='Americas'>America</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
            </select>
        </FilterContainer>
    )
}