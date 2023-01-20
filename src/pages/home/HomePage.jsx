import React from 'react'
import { ProductCard } from './../../components'
import './homePage.css'

export default function HomePage({products}) {
  return (
    <div className='HomePage'>
      <div className='container'>
        {
          (products.length === 0) ?
          <h2>Loading...</h2>
          :
          products.map(product => <ProductCard key={product.id} product={product}/>)
        }
      </div>
    </div>
  )
}
