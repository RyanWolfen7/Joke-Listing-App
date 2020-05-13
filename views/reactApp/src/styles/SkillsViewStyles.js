import styled from 'styled-components'
import { applySizedText } from '../helpers/index'

export const SkillViewHeader = styled.div`
    grid-area: 6 / 1 / span 1 / span 5;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    background-color:  #C53212;
`

export const OtherContainer = styled.div`
    grid-area: 1 / 1 / span 5 / span5;
    display: grid;
    align-items: center;
`

export const SkillsContainer = styled.div`
    grid-area: 1 / 1 / span 5/ span 5;
    display: grid;
    grid-template-columns: ${props => {
        let sizes = {}
        if(props.tech) sizes = { phone: '3', sm: '4', md: '5', lg: '6', mx: '8'}
        if(props.languages) sizes = { phone: '2', sm: '3', md: '4', lg: '5', mx: '7'}
        const columns = applySizedText(props.windowSize, sizes)
        return `repeat(${columns}, 1fr);`
    }};
    grid-gap: 1vw;
    padding: 1vw;
    padding-right: 1.7vw;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #C53212 #2e3830;

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

export const SkillsCard = styled.div`
    border: .3vw solid #2e3830;      
    display: grid;
    width: 100%;
    
    img {
        display: grid;
        place-self: center;
        object-fit: contain;
        width: 100%;
    }
`

export const SkillTab = styled.a`
    display: grid;
    place-self: center;
    margin: 0;
    cursor: pointer;
    transform: scale animation;
    transition: .5s, 1s;
    background-color: #C53212;
    color: #E6DBC9 ;
    border-radius: 5%;
    font-size: ${ props => { 
        const sizes = { phone: '.85rem', sm: '1.1rem', md: '1.4rem', lg: '1.7rem', mx: '1.9rem'}
        return applySizedText(props.windowSize, sizes) 
    }};

    ${ props => {
        if(props.selected){
        return (
            `background-color: #2E3831;
            border: .3vw solid #2E3831;
            color: #E6DBC9;
            padding: 3%;`
        )} else {
            return `
                :hover {
                    padding: .5vw;
                    border: .2vw solid #2E3831;
                    background-color: C;
                    color: #E6DBC9;
                }  
            `
        }
    }}
`

export const TestimonialContainer = styled.div`
    grid-area: 1 / 1 / span 5/ span 5;
`
