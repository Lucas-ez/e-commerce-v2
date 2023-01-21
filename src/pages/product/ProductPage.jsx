import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import './productPage.css'

export default function ProductPage({allProducts, categories}) {
  const {search} = useLocation()
  const query = new URLSearchParams(search)
  const id = query.get('id')

  const product = allProducts.filter(p => p.id === Number(id))[0]
  
  return (
    <div className='ProductPage'>
      <div className="container">
        <div className="top-section">
          <img src={product.image} alt={product.title} />
          <div className='right-section'>
            <Link to={`/?category=${categories.indexOf(product.category)}`}>
                    <span>{`more ${product.category}`}</span>
            </Link>
            <span>{product.title}</span>
            <span>{product.rating.rate} ({product.rating.count})</span>
            <span>$ {product.price}</span>
          </div>
        </div>
        <div className="bottom-section">
          {product.description}
        </div>
      </div>
    </div>
  )
}
