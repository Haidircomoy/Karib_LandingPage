import React from 'react';
import Video from '../../Video/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoplay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>
                Selamat Datang di KARIB
            </HeroH1>
            <HeroP>
                KOMUNITAS REMAJA MASJID BSD
            </HeroP>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection