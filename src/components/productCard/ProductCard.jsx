import React from 'react'
import { Link } from 'react-router-dom'
import './productCard.css'

export default function ProductCard({product}) {

  const {id, image, title, price} = {...product}

  return (
    <Link to={`/product?id=${id}`} className='ProductCard'>
      <div className="top-section">
        <img src={image} alt={title} />
      </div>
      <div className='bottom-section'>
        <h6 className='title'>{title}</h6>
        <h2 className='price'>{"$ " + price}</h2>
      </div>
    </Link>
  )
}
