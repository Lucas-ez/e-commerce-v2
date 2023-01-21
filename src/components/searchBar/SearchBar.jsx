import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar({categories, searchBar,setSearchBar}) {

  const [category, setCategory] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    navigate(process.env.PUBLIC_URL + `/?category=${category}`)
  },[category])

  console.log(searchBar);

  return (
    <div className='SearchBar'>
      <input type="text" value={searchBar} onChange={(e) => setSearchBar(e.target.value)}/>
      <select name="category" 
        onChange={(e) => {setCategory(e.target.value)}}
        defaultValue=''
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
