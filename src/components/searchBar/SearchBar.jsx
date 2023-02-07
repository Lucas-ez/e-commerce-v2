import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './searchBar.css'

export default function SearchBar({categories, searchBar,setSearchBar}) {
  
  const {search} = useLocation()
  const query = new URLSearchParams(search)
  const posCategory = query.get('category')

  const [category, setCategory] = useState(posCategory)
  const navigate = useNavigate()


  useEffect(() => {
    navigate(process.env.PUBLIC_URL + `/?category=${category}`)
  },[category])

  return (
    <div className='SearchBar'>
      <input type="text" value={searchBar} onChange={(e) => setSearchBar(e.target.value)}/>
      <select name="category" 
        onChange={(e) => {setCategory(e.target.value)}}
        defaultValue={category}
      >
        <option value="">all categories</option>
        {
          categories.map((category, index) => (
            <option value={index} key={index}>{category}</option>
          ))
        }
      </select>
    </div>
  )
}
