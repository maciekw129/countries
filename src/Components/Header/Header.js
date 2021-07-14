import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(faMoon, far);

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    height: 5rem;
    padding: 2rem 2rem;
    box-shadow: ${props => props.isDarkModeOn ? '0' : '0px 0.1rem 0.3rem lightgray'};
    z-index: 10;
    background-color: ${props => props.isDarkModeOn ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};

    & h1 {
        font-size: 14px;
        font-weight: 800;
    }
`;

const DarkModeContainer = styled.div`
    display: flex;
    align-items: center;
    transition: opacity 0.2s linear;

    & p {
        margin-left: 0.75rem;
        font-size: 14px;
        font-weight: 600;
    }

    &:hover {
        cursor: pointer;
        opacity: 30%;
        transition: opacity 0.2s linear;
    }
`

export function Header(props) {
    return(
        <HeaderContainer isDarkModeOn={props.isDarkModeOn}>
            <h1>Where in the world?</h1>
            <DarkModeContainer onClick={props.darkModeSwitcher}>
                <FontAwesomeIcon icon={['far', 'moon']} />
                <p>Dark Mode</p>
            </DarkModeContainer>
        </HeaderContainer>
    )
}