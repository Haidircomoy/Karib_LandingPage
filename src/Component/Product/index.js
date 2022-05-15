import React from 'react'
import img1 from '../../Image/svg1.svg'
import {
    ProductContainer,
    ProductH1,
    ProductWrapper,
    ProductCard,
    ProductIcon,
    ProductH2,
    ProductDesc,
}
from './productElements'

const Product = () => {
  return (
    <ProductContainer id="contact">
        <ProductH1>Our Activity</ProductH1>
            <ProductWrapper>
                <ProductCard>
                    <ProductIcon src={img1}/>
                    <ProductH2>SMS DUHA</ProductH2>
                    <ProductDesc>SMS DUHA adalah ...</ProductDesc>
                </ProductCard>
                <ProductCard>
                    <ProductIcon src={img1}/>
                    <ProductH2>SMS DUHA</ProductH2>
                    <ProductDesc>SMS DUHA adalah ...</ProductDesc>
                </ProductCard>
                <ProductCard>
                    <ProductIcon src={img1}/>
                    <ProductH2>SMS DUHA</ProductH2>
                    <ProductDesc>SMS DUHA adalah ...</ProductDesc>
                </ProductCard>
            </ProductWrapper>
    </ProductContainer>
  )
}

export default Product