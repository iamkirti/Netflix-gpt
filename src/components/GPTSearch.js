import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import { BG_URL } from '../utils/constants'; 
import GPTMovieSuggestions from './GPTMovieSuggestions'
const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={BG_URL}
          alt="background-image"
        />
      </div>
    <GPTSearchBar/>
    <GPTMovieSuggestions/>
    </div>
  )
}

export default GPTSearch