import React, { useState } from "react"
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  Button,
  ArrowForward,
  ArrowRight,
} from "./HeroElements"
import Video from "../../videos/video.mp4"

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <>
      <HeroContainer id='home'>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Kurumsal Teknoloji Bizim İşimiz</HeroH1>
          <HeroP>
            Otomotiv yedek parça sektöründe öncü olacak bir yazılım girişimi
            Aşin Teknoloji.
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to='contact'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary='true'
              dark='true'
              big='true'
            >
              İletişime Geçin {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default HeroSection
