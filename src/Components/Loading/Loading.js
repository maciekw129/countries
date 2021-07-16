import styled from 'styled-components';

const LoadingContainer = styled.div`
    position: relative;
    top: 9rem;
    font-size: 1.25rem;
`

const LoadingAnimation = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 0.5rem;

    @keyframes loading {
        from {
            opacity: 100%;
        }

        to {
            opacity: 0%;
        }
    }

    & div {
        content: '';
        height: 10px;
        width: 10px;
        background-color: black;
        border-radius: 50%;
    }

    & .one {
        animation: 1s infinite alternate loading;
    }

    & .two {
        animation: 1s infinite alternate loading;
        animation-delay: 0.5s;
    }

    & .three {
        animation: 1s infinite alternate loading;
        animation-delay: 1s;
    }

`




export function Loading() {
    return(
        <LoadingContainer>
            <p>Loading countries</p>
            <LoadingAnimation>
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
            </LoadingAnimation>
        </LoadingContainer>
    )
}