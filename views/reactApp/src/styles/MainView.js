import styled from 'styled-components'

export const ContentWrapper = styled.div`
    display: grid;
    grid-area: 4 / 1 / span 6 / span 5;
    border-left: 1vw solid #2e3830;
    border-right: 1vw solid #2e3830;
    grid-template-columns: repeat( 5, 1fr);
    grid-template-rows: repeat( 6, 1fr);
`
