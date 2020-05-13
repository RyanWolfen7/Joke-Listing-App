import React, { useState } from 'react'
import { CarouselContainer, DotContainer, Dot, Arrows } from '../../styles/CarouselStyles'
import leftArrow from '../../assets/images/leftArrow.png'
import rightArrow from '../../assets/images/rightArrow.png'

const CardCarousel = props => {
    const [ index, setIndex ] = useState(0)
    const { schema, windowSize, content } = props

    const cycleCard = direction => {
        if(direction === 'left') {
            index === 0 ? setIndex(schema.length - 1) : setIndex(index - 1)
        } else {
            index === schema.length - 1 ? setIndex(0) : setIndex(index + 1)
        }
    }

    const renderDots = () => {
        return schema.map( (card, i) => {
            return <Dot onClick={() => setIndex(i)} key={i} active={i === index} windowSize={windowSize}/>
        })
    }

    return (
        <CarouselContainer windowSize={windowSize}>
            { schema.length > 1 ? <Arrows onClick={() => cycleCard('left')} src={leftArrow} alt={leftArrow}/> : <Arrows/> }
            { content(schema, index) }
            { schema.length > 1 ? <Arrows onClick={() => cycleCard('right')} src={rightArrow} alt={rightArrow}/> : <div/> }
            <DotContainer number={schema.length}> { schema.length > 1 && renderDots() }</DotContainer>
        </CarouselContainer>
    )
}

export default CardCarousel

// Make Sure the content always has an schema(object), index