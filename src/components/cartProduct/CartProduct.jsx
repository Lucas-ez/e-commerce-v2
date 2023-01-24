import React from 'react'
import './cartProduct.css'
import { Link } from 'react-router-dom';

export default function CartProduct({product, removeProduct}) {
  return (
    <tr className='CartProduct'>
      <td className='info'>
        <Link to={`/product?id=${product.id}`} className='img'>
          <img src={product.image} alt="" />
        </Link>
        <Link to={`/product?id=${product.id}`} className='title'>
          <span>{product.title}</span>
        </Link>
      </td>
      <td className='right'>
        <span className='price'>$ {product.price}</span>
        <button onClick={()=> removeProduct(product.id)} className='remove-btn'>Remove</button>
      </td>
    </tr>
  )
}
