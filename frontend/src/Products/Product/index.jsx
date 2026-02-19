import React from 'react'
import { Col } from 'react-bootstrap';


const Product = ({product}) => {
    const {title, price, image} = product || {} ;
  return (
    <Col style={{border: "1px solid", marginBottom: '5px' }}>
      <img loading='lazy' src={image} height="200px" />
      <section>Title : {title}</section>
      <section>Price : {price}</section>
    </Col>
  )
}

export default Product