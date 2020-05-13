import styled from 'styled-components'
import { applySizedText } from '../helpers/index'

export const HomeWrapper = styled.div`
    display: grid;
    place-items: center;
    color: #2e3830;
    grid-area: 1 / 1 / span 6 / span 5; 
`

export const HomeCard = styled.div`
    text-align: center;
    padding: 0 15vw 0; 
`

export const HomeCardHeader = styled.h1`
    font-size: ${ props => { 
        const sizes = { phone: '3vh', sm: '3.3vh', md: '3.5vh', lg: '4vh', mx: '4.5vh'}
        return applySizedText(props.windowSize, sizes) 
    }}

`
export const HomeText = styled.p`
    a {
        color: #c53211;
        text-decoration: none;
        font-variant-caps: petite-caps;
        font-family: "Arial Black", Gadget, sans-serif;
    }
    font-size: ${ props => {
        const sizes = { phone: '2vh', sm: '2.3vh', md: '3vh', lg: '3.5vh', mx: '3.7vh'}
        return applySizedText(props.windowSize, sizes)
    }}
`