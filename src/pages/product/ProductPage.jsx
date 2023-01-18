import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ProductPage({allProducts}) {
  const {search} = useLocation()
  const query = new URLSearchParams(search)
  const id = query.get('id')

  const product = allProducts.filter(p => p.id === Number(id))[0]
  console.log(product, id);
  return (
    <div className='ProductPage'>
      {product.title}
      <img src={product.image} alt="" />
    </div>
  )
}
