import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
console.log("movies==>",movies)
  return (
    movies.nowPlayingMovies && (<div className="bg-black">
      <div className="mt-0 md:-mt-52 relative z-20">
      <MovieList title={"Now Playing"} movieData={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movieData={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movieData={movies.popularMovies} />
      <MovieList title={"Upcoming movies"} movieData={movies.nowPlayingMovies} />
      <MovieList title={"Horror movies"} movieData={movies.nowPlayingMovies} />
      </div>
      
    </div>)
  );
};

export default SecondaryContainer;
