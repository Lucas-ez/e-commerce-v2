import React from 'react'
import { Link } from 'react-router-dom'
import './productCard.css'

export default function ProductCard({product}) {

  const {id, image, title, price} = {...product}

  return (
    <Link to={`/product?id=${product.id}`} className='ProductCard'>
      <div className="top-section">
        <img src={product.image} alt={product.title} />
      </div>
      <div className='bottom-section'>
        <h6 className='title'>{product.title}</h6>
        <h2 className='price'>{"$ " + product.price}</h2>
      </div>
    </Link>
  )
}
