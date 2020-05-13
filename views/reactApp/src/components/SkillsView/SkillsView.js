import React, { useState } from 'react'
import SkillFooter from './SkillsFooter'
import TechSkills from '../TechSkills/TechSkills'
import LanguageSkills from '../SkillsLanguages/SkillsLanguages'
import Testimonials from '../SkillsTestimonials/SkillsTestimonials'
import OtherSkills from '../SkillsOther/SkillsOther'

const SkillsView = props => {
    const [selectedSkill, setSelectedSkill] = useState({ tech: true, languages: false, testimonials: false, other: false})
    const { windowSize } = props

    const handleSelectedSkill = story => {
        const resetSelected = {tech: false, languages: false, testimonials: false, other: false}
        setSelectedSkill({...resetSelected, ...{ [story]: true }})
    }

    return (<>
            {selectedSkill.tech && <TechSkills windowSize={windowSize}/>}
            {selectedSkill.languages && <LanguageSkills windowSize={windowSize}/>}
            {selectedSkill.testimonials && <Testimonials windowSize={windowSize}/>}
            {selectedSkill.other && <OtherSkills windowSize={windowSize}/>}
        <SkillFooter
            selectedSkill={selectedSkill}
            handleSelectedSkill={handleSelectedSkill}
            windowSize={windowSize}
        />
    </>)
}

export default SkillsView