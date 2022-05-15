import styled from 'styled-components';

export const ProductContainer = styled.div`
display: flex;
height: 500px;
flex-direction: column;
justify-content: center;
align-items: center;


@media screen and (max-width: 760px){
    margin-top: 100px;
}
`

export const ProductWrapper = styled.div`
max-width: 1000px;
display: grid;
margin: 0 auto;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}


@media screen and (max-width: 760px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}

`

export const ProductCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 10px;
max-heiht: 350px;
box-shadow: 1px rgba(0,0,0,2);
padding: 30px;
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`

export const ProductIcon = styled.img`
width: 160px;
height: 160px;
margin-bottom: 10px;
`

export const ProductH2 = styled.h2`
font-size: 32px;
color: #1eafed;
margin-bottom: 32px;


@media screen and (max-wdth: 760px){
    font-size: 24px;
}

`

export const ProductDesc = styled.p`
font-size: 16px;
color: #1eafed;
margin-bottom: 16px;

@media screen and (max-wdth: 760px){
    font-size: 14px;
}

`

export const ProductH1  = styled.h1`
font-size: 40px;
color: #1eafed;
margin-bottom: 16px;

@media screen and (max-width: 760px){
    font-size: 30px;
}
`