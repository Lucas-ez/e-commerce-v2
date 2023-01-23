import React from 'react'
import './cartPage.css'
import { CartProduct } from './../../components'

export default function CartPage({cartProducts, removeProduct}) {

  return (
    <div className='CartPage'>
      <div className="container">
        {
          (cartProducts.length !== 0) 
          ?
          cartProducts.map(product => <CartProduct key={product.id} product={product} removeProduct={removeProduct}/>)
          :
          <></>
        }
      </div>
    </div>
  )
}
