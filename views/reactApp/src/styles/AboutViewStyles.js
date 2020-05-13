import styled from 'styled-components'
import { applySizedText } from '../helpers/index'

export const AboutWrapper = styled.div`
    display: grid;
    place-items: center;
    color: #2e3830;
`

export const PhotoWrapper = styled.div`
    display: grid;
    grid-area: 2 / 1 / span 4 / span 2;
    width: 100%;
`

export const Photo = styled.img`
    place-self: center;
    object-fit: contain;
    width: auto;
    max-height: 90%;
    border: .3vw solid #2e3830;
    border-radius: 3%;
`

export const AboutContentWrapper = styled.div`
    display: grid;
    grid-area: ${props => {
        return props.windowSize === 'phone' ? '1 / 1 / span 6 / span 5' : '1 / 3 / span 6 / span 3'
    }};
    width: 100%
`

export const ContentCard = styled.div`
    display: grid;
    background-color: #2e3830;
    place-self: center;
    width: 80%;
    height: 50vh;
    color: #E6DBC9;
    grid-template-rows: auto 85% auto;
    
`

export const CardHeader = styled.div`
    display: inline-grid;
    color: #E6DBC9;
    background: #C53212;
    grid-template-columns: 25% 50% 25%;

    h4 {
        place-self: center;
        margin: 0;
        grid-column-start: 2;
        font-size: ${ props => { 
            const sizes = { phone: '.8rem', sm: '.9rem', md: '1rem', lg: '1.1rem', mx: '1.2rem'}
            return applySizedText(props.windowSize, sizes) 
        }}
    }

    img {
        justify-self: end;
        align-self: center;
        object-fit: contain;
        width: auto;
        max-height: 90%;
        margin-right: 5%;
        transition: .6s;

        :hover {
            background-color: #E6DBC9;
        }
    }
`

export const CardContent = styled.div`
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #C53212 #2e3830;
    place-items: center;
    display: grid;

    p {
        font-size: ${ props => { 
            const sizes = { phone: '1rem', sm: '1.2rem', md: '1.3rem', lg: '1.4rem', mx: '1.5rem'}
            return applySizedText(props.windowSize, sizes) 
        }}
    }

    ::-webkit-scrollbar {
        width: ${props => props.windowSize === 'phone' ? '8px' : '12px'};               
    }
    ::-webkit-scrollbar-track {
        background: #E6DBC9; 
        border: 3px solid #2e3830;      
    }
    ::-webkit-scrollbar-thumb {
        background-color: #C53212; 
        border: 3px solid #2e3830;      
    }
`

export const CardFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    color: #E6DBC9;
    background: #C53212;
`

export const History = styled.h4`
    display: grid;
    place-self: center;
    margin: 0;
    cursor: pointer;
    transition: 1s, 1.5s;

    :hover {
        padding: .5vw;
        border: 1px solid #C53212;
        color: #2E3831;
        background-color: #E6DBC9;
    }
`

export const Body = styled.div`
    align-self: start;
    padding: 0 3vw 0;
`
