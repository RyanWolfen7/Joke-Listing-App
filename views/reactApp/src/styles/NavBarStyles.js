import styled from 'styled-components'
import { applySizedText } from '../helpers/index'

export const NavWrapper = styled.div`
    background-color: #2e3830;
    grid-area: 3 /1 / span 1 / span 6;
    display: grid;
    grid-template-columns: repeat( 5, minmax(0, 1fr));
    align-content: center;
    justify-items: center;
    color: #e6dbc9;
    font-size: ${ props => { 
        const sizes = { phone: '1rem', sm: '1.2rem', md: '1.5rem', lg: '1.8rem', mx: '2rem'}
        return applySizedText(props.windowSize, sizes) 
    }};
`

export const NavButton = styled.div`
    cursor: pointer;
    transition: .5s, 1s;
    ${ props => {
        if(props.selected){
        return (
            `padding-bottom: 3px;
            border-bottom: 3px solid #c53211;`
        )}
    }}
    padding: .5vw;

    :hover {
        opacity: .8;
        color: #2e3830;
        background-color: #e6dbc9;
        padding: auto;
        border-radius: 5%;
    }

`