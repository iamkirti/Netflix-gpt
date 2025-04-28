import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchInputRef = useRef(null);

  const searchMovieInTmdb=async (movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="
      +movie+
      "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json=await data.json();
  }

  const handleGptSearchClick = async () => {
    const userQuery = searchInputRef.current?.value.trim();
    if (!userQuery) return;
  
    const gptPrompt = `Act as a movie recommendation system and suggest me 5 movies, comma separated, for the query: ${userQuery}. Like the example given ahead: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.`;
  
    try {
      console.log('Sending mock GPT query:', gptPrompt);
  
      // Simulate an API call delay
      setTimeout(() => {
        const mockGptResults = {
          choices: [
            {
              message: {
                content: 'Inception, Interstellar, The Dark Knight, Prestige, Memento'
              }
            }
          ]
        };
        const gptResults=mockGptResults.choices.message.content.split(",");

        const data=gptResults.map(movie=>searchMovieInTmdb(movie));
        //[Promise,prmoise,promise,promise,promise]

        const tmdbresults=await Promise.all(data);
        
        console.log('Mock GPT Results:', mockGptResults.choices);
      }, 1000); // 1 second delay to make it feel real
    } catch (error) {
      console.error('Error fetching GPT results:', error);
    }
  };
  
  
  
  // const handleGptSearchClick = async () => {
  //   const userQuery = searchInputRef.current?.value.trim();
  //   if (!userQuery) return;

  //   const gptPrompt = `Act as a movie recommendation system and suggest me 5 movies, comma separated, for the query: ${userQuery}. Like the example given ahead: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.`;

  //   try {
  //     const gptResponse = await openai.chat.completions.create({
  //       model: 'gpt-3.5-turbo',
  //       messages: [{ role: 'user', content: gptPrompt }],
  //     });

  //     console.log(gptResponse.choices);
  //   } catch (error) {
  //     console.error('Error fetching GPT results:', error);
  //   }
  // };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchInputRef}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey]?.gptSearchPlaceholder || 'Search...'}
        />
        <button
          type="button"
          className="py-2 px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey]?.search || 'Search'}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
