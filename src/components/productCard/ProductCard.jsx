import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({product}) {
  return (
    <div>
      <Link to={`/product?id=${product.id}`}>{product.title}</Link>
    </div>
  )
}
