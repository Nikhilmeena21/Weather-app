import React from 'react'
import search_icon from '../assets/search.png'
import './Weather.css'
const Weather = () => {
  return (
    <div className='weather'>
        <div className='search-bar'>
        <input type='text' placeholder='Search'></input>
        <img src={search_icon} alt=''></img>
        </div>
    </div>
  )
}

export default Weather