import React from 'react'
import './cartProduct.css'
import { Link } from 'react-router-dom';

export default function CartProduct({product, removeProduct}) {

  console.log(product);

  return (
    <div className='CartProduct'>
      <Link to={`/product?id=${product.id}`}>
        <img src={product.image} alt="" />
      </Link>
      <span>{product.title}</span>
      <span>${product.price}</span>
      <button onClick={()=> removeProduct(product.id)}>Remove</button>
    </div>
  )
}
