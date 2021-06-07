import { createSlice } from '@reduxjs/toolkit';

export const detailMovieSlice = createSlice({
  name: 'detailMovie',
  initialState: {
    loading: true,
    infoMovie: {},
    error: null,
  },
  reducers: {
    loadingData: (state, action) => {
      state.loading = action.payload.loading;
    },
    detailMovieSuccess: (state, action) => {
      state.infoMovie = action.payload.data;
      state.error = null;
    },
    detailMovieFail: (state, action) => {
      state.infoMovie = {};
      state.error = action.payload.error;
    }
  }
})

export const { loadingData, detailMovieSuccess, detailMovieFail } = detailMovieSlice.actions;

export default detailMovieSlice.reducer;