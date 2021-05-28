import * as types from '../actions/type';

const initialState = {
  loading: false,
  movies: {},
  errors: null,
  messages: null
}

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_SEARCH_MOVIE:
      return {
        ...state,
        ...{loading: action.loading}
      }
    case types.SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        ...{movies: action.data, errors: null, messages: null }
      }
    case types.SEARCH_NOT_FOUND:
      return {
        ...state,
        ...{messages: action.messages , errors: null }
      }
    case types.SEARCH_MOVIE_FAIL:
      return {
        ...state,
        ...{errors: action.error, messages: null}
      }
    default:
      return state;
  }
}