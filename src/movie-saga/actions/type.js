// hanh dong nguoi dung click button (hay go enter)
// no se dc truyen qua middleware saga
export const SEARCH_MOVIE = Symbol('SEARCH_MOVIE');

// action cua middleware saga
export const START_SEARCH_MOVIE = Symbol('START_SEARCH_MOVIE');
export const SEARCH_MOVIE_SUCCESS = Symbol('SEARCH_MOVIE_SUCCESS');
export const SEARCH_NOT_FOUND = Symbol('SEARCH_NOT_FOUND');
export const SEARCH_MOVIE_FAIL = Symbol('SEARCH_MOVIE_FAIL');

export const GET_DETAIL_MOVIE  = Symbol('GET_DETAIL_MOVIE');
