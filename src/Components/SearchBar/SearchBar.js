import { useState } from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Filter } from '../Filter/Filter.js';

const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    position: relative;
    margin-top: 8rem;

    @media only screen and (min-width: 800px) {
        flex-direction: row;
        justify-content: space-between;
    }

    & input {
        width: 100%;
        padding: 1rem 2rem;
        padding-left: 3.25rem;
        height: 3.25rem;
        border: 0px;
        border-radius: 5px;
        background-color: ${props => props.isDarkModeOn ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
        box-shadow: ${props => props.isDarkModeOn ? '0' : '0px 0.1rem 0.5rem lightgray'};
        margin-bottom: 2rem;

        @media only screen and (min-width: 800px) {
            width: 50%;
        }

        &::placeholder {
            color: ${props => props.isDarkModeOn ? 'hsl(0, 0%, 90%)' : 'hsl(0, 0%, 52%)'};
        }

        &:focus {
            outline: none;
        }
    }

    & .icon {
        position: absolute;
        height: 1rem;
        top: 1.125rem;
        left: 1.125rem;
        color: ${props => props.isDarkModeOn ? 'hsl(0, 0%, 90%)' : 'hsl(0, 0%, 52%)'};
    }
`;

export function SearchBar({ search, filter, isDarkModeOn }) {
    return(
        <SearchBarContainer isDarkModeOn={isDarkModeOn}>
            <input type="search" placeholder="Search for a country..." onChange={search} />
            <FontAwesomeIcon className='icon' icon={faSearch} />
            <Filter isDarkModeOn={isDarkModeOn} filter={filter} />
        </SearchBarContainer>
    )
}