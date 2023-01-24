import React from 'react'
import './cartPage.css'
import { CartProduct } from './../../components'

export default function CartPage({cartProducts, removeProduct}) {

  return (
    <table className='CartPage'>
      <tbody className="container">
        {
          (cartProducts.length !== 0) 
          ?
          cartProducts.map(product => <CartProduct key={product.id} product={product} removeProduct={removeProduct}/>)
          :
          <></>
        }
        <tr className='total'>Total ${cartProducts.reduce((acum, prod) => acum + prod.price,0)}</tr>
      </tbody>
    </table>
  )
}
