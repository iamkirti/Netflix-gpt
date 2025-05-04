import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTMovieSuggestions = () => {
  const {tmdbResults,movieResults}=useSelector(store=>store.gpt);
  if(!movieResults)
    return null;

  console.log(tmdbResults[0])
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-80'>
      {/* <h1>{movieResults[0]}</h1> */}
      {movieResults.map((movie,index)=><MovieList key={movie} title={movie} movieData={tmdbResults[index].results}/>)}
      
    </div>
  )
}

export default GPTMovieSuggestions