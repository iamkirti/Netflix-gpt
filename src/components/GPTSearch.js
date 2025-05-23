import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import { BG_URL } from '../utils/constants'; 
import GPTMovieSuggestions from './GPTMovieSuggestions'
const GPTSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
        <img className='h-screen object-cover'
          src={BG_URL}
          alt="background-image"
        />
      </div>
      <div className=''>
      
    <GPTSearchBar/>
    <GPTMovieSuggestions/>
    </div>
    </>
    
  )
}

export default GPTSearch