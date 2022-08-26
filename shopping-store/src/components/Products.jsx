import React, { useEffect, useState } from 'react'

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center'
}

const productStyle = {
    width: '300px',
    height: '200px',
    border: '1px solid black'
}
function Products() {
  const [products, setProducts]  = useState([]);

 // useEffect is a lifecycle method to hook the data in to the component
  useEffect(()=> {
    fetch('https://fakestoreapi.com/products').then(res=> {
      return res.json();
    }).then(res=> {
      console.log(res);
      setProducts(res);
    }).catch(err=> console.log(err));
  },[])

  return (
    <div style={style}>{products.length && products.map(product=> {
      return (
        <div style={productStyle}>
        <div>price : {product.price}</div>
        <img src={product.image} style={{height: '100px', width:'100px'}}></img>
        <div>type: {product.category}</div>
        </div>
      )
    })}</div>
  )
}

export default Products
