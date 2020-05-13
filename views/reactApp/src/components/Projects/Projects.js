import React from 'react'
import { ProjectsContainer, ProjectContainer, ProjectHeader, ProjectContent } from '../../styles/ProjectStyles'
import schema from './Schema'

const ProjectsView = props => {
    const { windowSize } = props

    const renderProjects = () => {

        return schema.map( (project, i) => {
            const { logo, header, sub } = project 
            return (
                <ProjectContainer key={i}>
                    <img src={logo} alt={logo}/>
                    <ProjectHeader windowSize={windowSize}> { header } </ProjectHeader>
                    <ProjectContent windowSize={windowSize}> {sub} </ProjectContent>
                </ProjectContainer>
            )
        }) 
    }

    return (
        <ProjectsContainer windowSize={windowSize}>
            { renderProjects() }
        </ProjectsContainer>
    )
}

export default ProjectsView