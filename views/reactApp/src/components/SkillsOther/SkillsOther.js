import React from 'react'
import CardCarousel from '../CardCarousel/CardCarousel'
import { OtherContainer } from '../../styles/SkillsViewStyles'
import { OtherCard, Icon, OtherCardContent, SkillList} from '../../styles/CarouselStyles'
import schema from './SkillSchema'

const OtherSkills = props => {
    const { windowSize } = props
    const phone = windowSize === 'phone'

    const skills = (schema, index) => {
        const { title, subtitle, image, skillArray } = schema[index]

        return (
            <OtherCard phone={phone}>
                { !phone && <Icon src={image} alt={title} key={index} />}
                <OtherCardContent windowSize={windowSize}>
                    <h1> {title} </h1>
                    <h3> {subtitle} </h3>
                    { skillArray.map( skill => { 
                        const isLink = skill === 'https://hellopoetry.com/ryan-clark/poems/popular/'
                        // All this for one skill ... refactor later future me
                        return <SkillList key={skill} link={isLink} onClick={() => {if(isLink) window.open(skill)}}> {isLink ? 'Find them HERE' : skill} </SkillList>
                        })
                    }
                </OtherCardContent>
            </OtherCard>
        )
    }

    return (
        <OtherContainer>
            <CardCarousel schema={schema} content={skills} windowSize={windowSize}/>
        </OtherContainer>
    )
}

export default OtherSkills