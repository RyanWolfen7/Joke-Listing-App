import styled from 'styled-components'
import { applySizedText } from '../helpers/index'

export const ProjectsContainer = styled.div`
    grid-area: 1 / 1 / span 6 / span 5; 
    display: grid;
    grid-gap: 1rem ;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #C53212 #2e3830;
    padding: 1rem;

    ::-webkit-scrollbar {
        width: ${props => props.windowSize === 'phone' ? '8px' : '12px'};               
    }
    ::-webkit-scrollbar-track {
        background: #E6DBC9; 
    }
    ::-webkit-scrollbar-thumb {
        background-color: #C53212; 
        border: 3px solid #2e3830;      
    }
`

export const ProjectHeader = styled.div`
    grid-area: 1 / 3 / span 1 / span 3;
    display: grid;
    place-content: center;
    color: #E6DBC9;
    font-size: ${ props => { 
        const sizes = { phone: '1rem', sm: '1.2rem', md: '1.5rem', lg: '1.8rem', mx: '2rem'}
        return applySizedText(props.windowSize, sizes) 
    }};
` 

export const ProjectContent = styled.div`
    grid-area: 2 / 3 / span 1 / span 3;
    display: grid;
    place-content: center;
    color: #E6DBC9;
    font-size: ${ props => { 
        const sizes = { phone: '.6rem', sm: '1rem', md: '1.2rem', lg: '1.5rem', mx: '1.8rem'}
        return applySizedText(props.windowSize, sizes) 
    }};
`

export const ProjectContainer = styled.div`
    padding: 0.8rem;
    margin-bottom: 1rem;
    height: 6rem;
    background: #2E3831;
    display: grid;
    grid-template-columns: repeat( 5, minmax(0, 1fr));
    grid-template-rows: repeat( 2, minmax(0, 1fr));

    img {
        place-self: center;
        grid-area: 1 / 1 / span 2 / span 2;
        object-fit: contain;
        max-width: 100%;
    }
`