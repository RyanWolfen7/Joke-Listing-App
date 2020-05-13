import React, { useState } from 'react'
import { PhotoWrapper, AboutContentWrapper, Photo, ContentCard, CardContent, CardHeader, Body } from '../../styles/AboutViewStyles'
import Me from '../../assets/images/Me.jpg'
import Return from '../../assets/images/return.png'
import { renderStory, renderTitle} from './StorySchema'
import StoryFooter from './StoryFooter' 

const AboutView = props => {
    const { windowSize } = props
    const phone = windowSize === 'phone'
    const [selectedStory, setSelectedStory] = useState({default: true, veteran: false, traveler: false, coder: false})

    const handleSelectedStory = story => {
        const resetSelected = {default: false, veteran: false, traveler: false, coder: false}
        setSelectedStory({...resetSelected, ...{ [story]: true }})
        document.getElementById('top').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
    }

    return (<>
        { !phone && <PhotoWrapper> 
            <Photo src={Me} windowSize={windowSize}/>
        </PhotoWrapper>}

        <AboutContentWrapper windowSize={windowSize}>
            <ContentCard>
                <CardHeader windowSize={windowSize}> 
                    <h4> {renderTitle(selectedStory)} </h4>
                    {!selectedStory.default && <img src={Return} alt={'return'} onClick={() => handleSelectedStory('default')}/>}
                </CardHeader>

                <CardContent windowSize={windowSize}>
                    <Body>{renderStory(selectedStory)}</Body>
                </CardContent>

                <StoryFooter
                    selectedStory={selectedStory}
                    handleSelectedStory={handleSelectedStory}
                    phone={phone}
                />
            </ContentCard>
        </AboutContentWrapper>
    </>)
}

export default AboutView