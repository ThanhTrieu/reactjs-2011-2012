import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movieReducer',
  initialState: {
    loading: false,
    movies: {},
    errors: null,
    messages: null
  },
  reducers: {
    startSearchMovie: (state, action) => {
      state.loading = action.payload.loading;
    },
    searchMovieSuccess: (state, action) => {
      state.movies = action.payload.data;
      state.errors = null;
      state.messages = null;
    },
    searchMovieFail: (state, action) => {
      state.errors = action.payload.error;
      state.messages = null;
      state.movies = {};
    },
    searchNotFoundMovie: (state, action) => {
      state.errors = null;
      state.messages = action.payload.message;
      state.movies = {};
    }
  }
});
export const { startSearchMovie, searchMovieSuccess, searchMovieFail, searchNotFoundMovie } = movieSlice.actions;

export default movieSlice.reducer;