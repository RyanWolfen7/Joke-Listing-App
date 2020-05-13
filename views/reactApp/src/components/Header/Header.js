import React from 'react'
import { HeaderWrapper, Logo, LogoContainer, TitleContainer } from '../../styles/HeaderStyles'
import LogoImg from '../../assets/images/Logo.png'

const Header = props => {
    const { windowSize } = props

    return (
        <HeaderWrapper>
            <LogoContainer>
                <Logo src={LogoImg} alt='blah'/>
            </LogoContainer>
            <TitleContainer windowSize={windowSize}>
                <h1> Ryan Clark </h1>
                <h2> Full Stack Web Dev </h2>
            </TitleContainer>
        </HeaderWrapper>
    )
}

export default Header