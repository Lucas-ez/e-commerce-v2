import React from 'react'
import { ProductCard } from './../../components'

export default function HomePage({allProducts}) {
  return (
    <div className='HomePage'>
      {
        (allProducts.length === 0) ?
        <h2>Loading...</h2>
        :
        allProducts.map(product => <ProductCard key={product.id} product={product}/>)
      }
    </div>
  )
}
