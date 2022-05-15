import styled from 'styled-components';

export const InfoContainer = styled.div`
color: #fff;

@media screen and (max-width: 760px){
    padding: 100px 0px;
}

@media screen and (max-width: 480px){
    padding: 0px 0px 200px 0px;
}

`

export const Infowrapper = styled.div`
display: block;
z-index: 1;
width: 100%;
max-width: 1400px;
margin-left: auto;
margin-right: auto;
padding: 0px 24px;
justify-content: center;
`

export const InfoRow = styled.div`
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 760px){
    flex-direction: column;
}

`

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;

`
export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;

`

export const TextWrapper = styled.div`
max-width: 580px;
padding-bottom: 60px;
padding-top: 150px;

`

export const TopLine = styled.div`
color: #000;
font-size: 16px;
line-height: 16px;
font-weight: 600;
text-transform: uppercase;
margin-bottom: 16px;
`

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: #000;

@media screen and (max-width: 460px){
    font-size: 28px;
}
`

export const Subtitle = styled.p`
max-width: 400px;
margin-bottom : 32px;
font-size: 16px;
line-height: 24px;
color: #000;
`

export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
`

export const ImgWrap = styled.div`
max-width: 555px;
heihgt: 100%;
`

export const Img = styled.img`
width: 100%;
margin: 0 0 10 0
padding-right: 0;
border-radius: 10px;
`