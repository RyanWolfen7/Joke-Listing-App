import React from 'react'
import { History, CardFooter } from '../../styles/AboutViewStyles'
import { capitalizeFirstLetter } from '../../helpers/index'

const StoryFooter = props => {
    const {selectedStory, phone, handleSelectedStory } = props

    const handleSelect = event => {
        handleSelectedStory(event.target.id)
    }

    const renderStoryButtons = () => {
        return Object.keys(selectedStory).map( story => {
            if(story !== 'default') {
                return (
                    <History
                        id={story}
                        key={story}
                        selected={selectedStory[story]}
                        onClick={event => handleSelect(event)}
                    >
                        {!phone && 'The'} { capitalizeFirstLetter(story) } 
                    </History>
                )
            } else {
                return null
            }           
        })
    }

    return <CardFooter> { renderStoryButtons() } </CardFooter>
}

export default StoryFooter