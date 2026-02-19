import React, { useEffect, useState } from 'react'
import axios from 'axios' ;


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

  const product = products[0] ;
  

  return (
    <>
      <section>
      <section>Title : {product?.title}</section>
      <section>Price : {product?.price}</section>
    </section>
    </>
  )
}

export default Products