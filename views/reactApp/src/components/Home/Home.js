import React from 'react'
import { HomeWrapper, HomeText, HomeCard, HomeCardHeader } from '../../styles/HomeStyles'

const Home = props => {
    const {windowSize} = props

    return (
        <HomeWrapper>
            <HomeCard>
                <HomeCardHeader windowSize={windowSize}> Welcome to my website</HomeCardHeader>
                <HomeText windowSize={windowSize}>
                    This is a static website built in React.
                    It was built with a redux thunk structure for future improvements and 
                    you can find this site's source code <a href='https://github.com/RyanWolfen7/portfolioV2'>here</a>.
                    It is still a work in progress. 
                    Peruse at your leisure and feel free to contact me with one of the links below.
                </HomeText>
            </HomeCard>
        </HomeWrapper>
    )
}

export default Home