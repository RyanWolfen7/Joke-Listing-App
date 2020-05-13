import React from 'react'
import { SkillViewHeader, SkillTab } from '../../styles/SkillsViewStyles'
import { capitalizeFirstLetter } from '../../helpers/index'

const SkillsFooter = props => {
    const {selectedSkill, handleSelectedSkill, windowSize } = props

    const handleSelect = event => {
        handleSelectedSkill(event.target.id)
    }

    const renderSkillButtons = () => {
        return Object.keys(selectedSkill).map( skill => {
            return (
            <SkillTab
                id={skill}
                key={skill}
                selected={selectedSkill[skill]}
                onClick={event => handleSelect(event)}
                windowSize={windowSize}
            >
                { capitalizeFirstLetter(skill) }
            </SkillTab>)
        })
    }

    return<SkillViewHeader> { renderSkillButtons() } </SkillViewHeader>
}

export default SkillsFooter