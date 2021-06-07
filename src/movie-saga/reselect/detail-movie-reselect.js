import { createSelector } from 'reselect';

const detailState = state => state.detailMovie;

export const getLoadingDetail = createSelector(
  detailState,
  item => item.loading
);

export const detailDataMovie = createSelector(
  detailState,
  item => item.infoMovie
)

export const viewDataDetail = createSelector(
  detailDataMovie,
  item => ({
    title: item.title,
    original_title: item.original_title,
    overview: item.overview,
    popularity: item.popularity,
    poster_path: item.poster_path,
    status: item.status,
    vote_average: item.vote_average,
    vote_count: item.vote_count,
    production_companies: item.production_companies
  })
)