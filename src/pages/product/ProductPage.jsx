import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
import { StarsRating } from '../../components'
import { Toaster, toast } from 'react-hot-toast'
import './productPage.css'

export default function ProductPage({allProducts, categories, addToCart}) {
  const {search} = useLocation()
  const query = new URLSearchParams(search)
  const id = query.get('id')

  const product = allProducts.filter(p => p.id === Number(id))[0]
  
  const handleAdd = () => {
    addToCart(product)
    toast.success('Successfully added', {
      style: {
        border: '1px solid #4b5489',
        padding: '16px',
        color: '#4b5489',
      },
      iconTheme: {
        primary: '#4b5489',
        secondary: '#FFFAEE',
      },
    });
  }

  return (
    <div className='ProductPage'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
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
            <StarsRating rate={product.rating.rate} count={product.rating.count}/>
            <span className='price'>$ {product.price}</span>
            <button onClick={handleAdd} className='add-btn'>
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
