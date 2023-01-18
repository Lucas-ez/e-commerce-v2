import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { SearchBar } from './../components/'

export default function Header() {
  return (
    <div className='Header'>
      <div className='container'>
        <Link to='/'>
          <div className='logo'>
            Logo
          </div>
        </Link>
        <SearchBar />
        <div className='cart-btn'>
          <button>CART</button>
        </div>
      </div>
    </div>
  )
}
