import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
import './productPage.css'

export default function ProductPage({allProducts, categories, addToCart}) {
  const {search} = useLocation()
  const query = new URLSearchParams(search)
  const id = query.get('id')

  const product = allProducts.filter(p => p.id === Number(id))[0]
  
  return (
    <div className='ProductPage'>
      <div className="container">
        <div className="top-section">
          <div className="left-section">
            <img src={product.image} alt={product.title} />
          </div>
          <div className='right-section'>
            <Link to={`/?category=${categories.indexOf(product.category)}`} className='more-category'>
              {`more ${product.category}`}
            </Link>
            <span className='title'>{product.title}</span>
            <span>{product.rating.rate} ({product.rating.count})</span>
            <span className='price'>$ {product.price}</span>
            <button onClick={() => addToCart(product)} className='add-btn'>
              <FaCartPlus />
              <span>Add to cart</span>
            </button>
          </div>
        </div>
        <div className="bottom-section">
          <h2>Description</h2>
          <div className='description'>
            {product.description}
          </div>
        </div>
      </div>
    </div>
  )
}
