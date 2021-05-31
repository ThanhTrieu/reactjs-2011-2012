import { createSelector } from 'reselect';

const stateMovie = state => state.movieReducer;

export const loadingSearch = createSelector(
  stateMovie,
  item => item.loading
);

const resultsMovie = createSelector(
  stateMovie,
  item => item.movies
)

export const getDataMovies = createSelector(
  resultsMovie,
  item => {
    if(item.hasOwnProperty('results')){
      return item.results;
    }
    return null;
  }
)
export const getTotalResults = createSelector(
  resultsMovie,
  item => {
    if(item.hasOwnProperty('total_results')){
      return item.total_results;
    }
    return 0;
  }
)
export const getTotalPages = createSelector(
  resultsMovie,
  item => {
    if(item.hasOwnProperty('total_pages')){
      return item.total_pages;
    }
    return 0;
  }
)