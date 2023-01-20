import React from 'react'
import { ProductCard } from './../../components'
import './homePage.css'

export default function HomePage({allProducts}) {
  return (
    <div className='HomePage'>
      <div className='container'>
        {
          (allProducts.length === 0) ?
          <h2>Loading...</h2>
          :
          allProducts.map(product => <ProductCard key={product.id} product={product}/>)
        }
      </div>
    </div>
  )
}
