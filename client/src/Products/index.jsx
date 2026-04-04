import React, { useEffect, useState } from 'react'
import axios from 'axios' ;
import Product from './product';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';


const Products = () => {
  const URL = 'https://fakestoreapi.com/products' ;
  const [products, setProducts] = useState([]) ;

  useEffect(() => {
    (async () => {
      const {data} = await axios.get(URL) ;
      setProducts(data) ;
      console.log(data) ;
    })() ;
  
   
  }, []) ;

  
  

  return (
    <>
    <p>welcome</p>
    <Container fluid>
      <Row>
        {products.map(product => <Product product={product} key={product.id} />)}
      </Row>
    </Container>
      
      
    </>
  )
}

export default Products