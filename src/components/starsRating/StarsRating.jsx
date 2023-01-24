import React from 'react'
import './starsRating.css'

import fullStar from './img/star-full-icon.svg'
import halfStar from './img/star-half-icon.svg'
import emptyStar from './img/star-empty-icon.svg'

const StarsRating = ({rate, count}) => {

  const generate = n => {
    let i = 0; 
    const stars = []
    while(i < Math.floor(rate) && i < 5) {
      stars.push(fullStar)
      i++
    }
    if(rate - i >= 0.5 && i < 5) {
      stars.push(halfStar)
      i++
    }
    while(i < 5) {
      stars.push(emptyStar)
      i++
    }

    return stars.map((star, index) => <img key={index} src={star} alt='' className='star'/>)
    
  }

  return (
    <div className='Rating'>
      {generate(rate)}
      <span className='count'>({count})</span>
    </div>
  )
}

export default StarsRating;