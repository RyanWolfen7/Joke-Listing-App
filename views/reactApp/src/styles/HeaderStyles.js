import styled from 'styled-components'
import { applySizedText } from '../helpers/index'

export const HeaderWrapper = styled.div`
    grid-area: 1 / 1 / span 2 / span 5;
    background-color: #c53211;
    display: grid;
    grid-template-columns: repeat( 5, minmax(0, 1fr));
    height: 100%;
`

export const LogoContainer = styled.div`
    grid-area: 1 / 1 / span 2 / span 2;
    display: grid;
`

export const TitleContainer = styled.div`
    grid-column-start: 3;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 3;
    display: grid;

    h1 {
        color:  #e6dbc9;
        font-variant-caps: petite-caps;
        align-self: end;
        justify-self: center;
        margin: .6rem 0 0;
        font-size: ${ props => { 
            const sizes = { phone: '5vh', sm: '6vh', md: '6.5vh', lg: '7vh', mx: '10vh'}
            return applySizedText(props.windowSize, sizes) 
        }};
        transition: .5s, 1s;
    }
    h2 {
        color:  #e6dbc9;
        justify-self: center;
        align-self: start;
        margin: 0 0 .8rem;
        font-size: ${ props => { 
            const sizes = { phone: '2vh', sm: '3vh', md: '3.3vh', lg: '3.5vh', mx: '5vh'}
            return applySizedText(props.windowSize, sizes) 
        }}
    }
`

export const Logo = styled.img`
    place-self: center;
    object-fit: contain;
    width: auto;
    max-height: 70%;
    border: 1vh solid #2e3830;
`