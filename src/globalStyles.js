import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Nunito Sans';
        background-color: ${props => props.isDarkModeOn ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'};
        width: 100%
        height: 100%;   
        color: ${props => props.isDarkModeOn ? 'hsl(0, 0%, 90%)' : 'hsl(112, 80, 0)'}; 
    }
`;

export default GlobalStyle;