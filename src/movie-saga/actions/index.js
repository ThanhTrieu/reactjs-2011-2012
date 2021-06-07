import * as types from './type';

export const getDataDetailMovie = ( id ) => ({
  type: types.GET_DETAIL_MOVIE,
  id
});

export const searchMovie = (keyword) => ({
  type: types.SEARCH_MOVIE,
  keyword
});

export const startSearchMovie = (loading) => ({
  type: types.START_SEARCH_MOVIE,
  loading
});

export const searchMovieSuccess = (data) => ({
  type: types.SEARCH_MOVIE_SUCCESS,
  data
});

export const searchMovieFail = (error) => ({
  type: types.SEARCH_MOVIE_FAIL,
  error
});

export const searchNotFoundMovie = (message) => ({
  type: types.SEARCH_NOT_FOUND,
  message
});