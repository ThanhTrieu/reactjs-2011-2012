import React from 'react';
import MoviesList from '../components/movies';
import SearchMovie from '../components/search';

const MoviePage = () => {
  return (
    <>
      <SearchMovie/>
      <MoviesList/>
    </>
  )
}
export default React.memo(MoviePage);