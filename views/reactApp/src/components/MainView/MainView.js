import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../Header/Header'
import { useWindowDimensions, determinWindowSize } from '../../helpers/index'
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import { ContentWrapper } from '../../styles/MainView'
import Footer from '../Footer/Footer'
import AboutView from '../AboutView/AboutView'
import SkillsView from '../SkillsView/SkillsView'
import ProjectsView from '../Projects/Projects'

const MainView = props => {
    const [selected, setSelected] = useState({home: true, about: false, skills: false, projects: false, more: false})
    const { height, width } = useWindowDimensions()
    const windowSize = determinWindowSize(height, width)

    const handleSelectedTab = tab => {
        const resetSelected = {home: false, about: false, skills: false, projects: false, more: false}
        setSelected({...resetSelected, ...{ [tab]: true }})
    }
    
    return ( <>
            <Header
                windowSize={windowSize}
            />
            <NavBar
                windowSize={windowSize}
                selected={selected}
                handleSelectedTab={handleSelectedTab}
            />
            <ContentWrapper>
                {selected.home && <Home windowSize={windowSize}/>}
                {selected.about && <AboutView windowSize={windowSize}/>}
                {selected.skills && <SkillsView windowSize={windowSize}/>}
                {selected.projects && <ProjectsView windowSize={windowSize}/>}
            </ContentWrapper>
            <Footer/>
        </>
    )
}

export default withRouter(MainView)