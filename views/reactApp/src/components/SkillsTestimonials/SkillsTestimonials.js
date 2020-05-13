import React from 'react'
import { TestimonialContainer } from '../../styles/SkillsViewStyles'
import { TestimonialCard, CardContent } from '../../styles/CarouselStyles'
import CardCarousel from '../CardCarousel/CardCarousel'
import testimonials from './TestimonialSchema'

const Testimonials = props => {
    const { windowSize } = props

    const testimonial = (schema, index) => {
        const { name, company, position, testimonial, linkedIn} = schema[index]
    
        return (
            <TestimonialCard windowSize={windowSize}>
                <CardContent windowSize={windowSize} linkedIn={linkedIn}>
                    <h1 onClick={() => { if(linkedIn) window.open(linkedIn, name) } }> { name } </h1>
                    <h2> { position } @ { company } </h2>
                    <p> " { testimonial } "</p>
                </CardContent>
            </TestimonialCard>
        )
    }

    return (
        <TestimonialContainer>
            <CardCarousel schema={testimonials} windowSize={windowSize} content={testimonial}/>
        </TestimonialContainer>
    )
}

export default Testimonials