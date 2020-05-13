import React from 'react'
import { NavWrapper, NavButton } from '../../styles/NavBarStyles'

const NavBar = props => {
    const { windowSize, selected, handleSelectedTab }= props

    const handleSelect = event => {
        handleSelectedTab(event.target.id)
    }
    return(
        <NavWrapper windowSize={windowSize}>
            <NavButton id={'home'} selected={selected.home} onClick={event => handleSelect(event)} windowSize={windowSize}>Home</NavButton>
            <NavButton id={'about'} selected={selected.about} onClick={event => handleSelect(event)} windowSize={windowSize}>About</NavButton>
            <NavButton id={'skills'} selected={selected.skills} onClick={event => handleSelect(event)} windowSize={windowSize}>Skills</NavButton>
            <NavButton id={'projects'} selected={selected.projects} onClick={event => handleSelect(event)} windowSize={windowSize}>Projects</NavButton>
            <NavButton id={'more'} selected={selected.more} onClick={event => handleSelect(event)} windowSize={windowSize}>More</NavButton>
        </NavWrapper>
    )
}

export default NavBar