import React from 'react'
import Button from 'react-scroll'
import { 
    InfoContainer,
    Infowrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img

} from './infoSectionElement'

const Infosection = ({id, imgstart, topline, img, headline, description, alt}) => {
  return (
    <>
     <InfoContainer id={id}>
         <Infowrapper>
             <InfoRow ImgStart={imgstart}>
                 <Column1>
                    <TextWrapper>
                        <TopLine>{topline}</TopLine>
                        <Heading>{headline}</Heading>
                        <Subtitle>{description}</Subtitle>
                    </TextWrapper>
                 </Column1>
                 <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt}/>
                    </ImgWrap>
                 </Column2>
             </InfoRow>
         </Infowrapper>
     </InfoContainer>
    </>
  )
}

export default Infosection