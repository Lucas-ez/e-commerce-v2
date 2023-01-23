import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './header.css'
import { SearchBar } from './../components/'
import { FaShoppingCart } from 'react-icons/fa'

export default function Header({categories, searchBar,setSearchBar}) {

  const location = useLocation()

  return (
    <div className='Header'>
      <div className='container'>
        <Link to='/?category='>
          <div className='logo'>
            Logo
          </div>
        </Link>
        {
          location.pathname !== '/' 
          ?
          <></>
          :
          <SearchBar categories={categories} searchBar={searchBar} setSearchBar={setSearchBar}/>
        }
        <Link to='/cart'>
          <FaShoppingCart  className='cart-btn'/>
        </Link>
      </div>
    </div>
  )
}
