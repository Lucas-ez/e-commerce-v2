import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './header.css'
import { SearchBar } from './../components/'

export default function Header({categories}) {

  const location = useLocation()

  return (
    <div className='Header'>
      <div className='container'>
        <Link to='/'>
          <div className='logo'>
            Logo
          </div>
        </Link>
        {
          location.pathname !== '/' 
          ?
          <></>
          :
          <SearchBar categories={categories}/>
        }
        <div className='cart-btn'>
          <button>CART</button>
        </div>
      </div>
    </div>
  )
}
