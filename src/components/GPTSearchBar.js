import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';
import { useDispatch } from 'react-redux';

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchInputRef = useRef(null);
  const dispatch=useDispatch();

  const searchMovieInTmdb = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(`Error searching movie "${movie}" in TMDB:`, error);
      return null;
    }
  };

  const simulateGptResponse = (prompt) => {
    console.log('Sending mock GPT query:', prompt);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          choices: [
            {
              message: {
                content: 'Inception, Interstellar, The Dark Knight, Prestige, Memento'
              }
            }
          ]
        });
      }, 1000); // simulate 1 second API delay
    });
  };

  const handleGptSearchClick = async () => {
    const userQuery = searchInputRef.current?.value.trim();
    if (!userQuery) return;

    const gptPrompt = `Act as a movie recommendation system and suggest me 5 movies, comma separated, for the query: ${userQuery}. Like the example given ahead: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.`;

    try {
      // MOCK API CALL
      const mockGptResults = await simulateGptResponse(gptPrompt);

      const movieNames = mockGptResults.choices[0].message.content.split(',').map(movie => movie.trim());

      console.log(movieNames)

      // Search each movie in TMDB
      const tmdbPromises = movieNames.map((movie) => searchMovieInTmdb(movie));
      const tmdbResults = await Promise.all(tmdbPromises);

      console.log('TMDB Results:', tmdbResults);

      dispatch(addGptMovieResult({tmdbResults:tmdbResults,movieResults:movieNames}))
    } catch (error) {
      console.error('Error fetching GPT or TMDB results:', error);
    }
  };

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
