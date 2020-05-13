import styled from 'styled-components'

export const FooterWrapper = styled.div`
    display: grid;
    grid-area: 10 / 1 / span 1 / span 5;
    background-color:  #2e3830;
    grid-template-columns: repeat( 7, minmax(0, 1fr));
    justify-content: space-evenly;
    justify-items: center;
`

export const BadgeContainer = styled.a`
    display: grid;
    cursor: pointer;
`

export const Badge = styled.img`
    place-self: center;
    object-fit: contain;
    width: 65%;
    height: 65%;
    transition: .6s;
    transform: scale animation;
    border-radius: 2.5vw;

    :hover {
        width: 60%;
        height: 60%;
    }
`

export const Spacer = styled.div`

`