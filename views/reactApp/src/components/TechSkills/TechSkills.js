import React from 'react'
import { SkillsCard, SkillsContainer } from '../../styles/SkillsViewStyles'
import techIcons from '../../assets/techIcons/index'

const TechSkills = props => {
    const { windowSize } = props

    const renderTechSkills = () => {
        return techIcons.map((skill, i) => {
            return (
                <SkillsCard key={i}> 
                    <img 
                        src={skill}
                        alt={skill}
                    />
                </SkillsCard>
            )
        })
    }

    return <SkillsContainer tech windowSize={windowSize}>{renderTechSkills()} </SkillsContainer>

}

export default TechSkills