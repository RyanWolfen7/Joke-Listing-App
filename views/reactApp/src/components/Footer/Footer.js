import React from 'react'
import { FooterWrapper, BadgeContainer, Badge, Spacer } from '../../styles/FooterStyles'
import github from '../../assets/images/github.png'
import linkedIn from '../../assets/images/linkedin.png'
import faceBook from '../../assets/images/fb.png'
import youtube from '../../assets/images/youtube.png'
import gmail from '../../assets/images/gmail.png'

const Footer = props => {
    return (
        <FooterWrapper>
            <Spacer/>
            <BadgeContainer href='https://github.com/RyanWolfen7?tab=repositories' target='_blank'>
                <Badge src={github} />
            </BadgeContainer>
            <BadgeContainer href='https://www.linkedin.com/in/ryan-clark-44b156127/' target='_blank'>
                <Badge src={linkedIn} />
            </BadgeContainer>
            <BadgeContainer href='https://www.facebook.com/ryan.clark.18400' target='_blank'>
                <Badge src={faceBook} />
            </BadgeContainer>
            <BadgeContainer href='https://www.youtube.com/channel/UCH4TK55SqiGyTIzwUnVpfxg?view_as=subscriber' target='_blank'>
                <Badge src={youtube} />
            </BadgeContainer>
            <BadgeContainer href='mailto:wolfen7lada@gmail.com' target='_blank'>
                <Badge src={gmail} />
            </BadgeContainer>
        </FooterWrapper>
    )
}

export default Footer