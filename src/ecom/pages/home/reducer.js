import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    loading: false,
    popularProduct: {},
    error: null
  },
  reducers: {
    loadingGetData: (state, action) => {
      state.loading = action.payload.loading;
    },
    getDataProductSuccess: (state, action) => {
      state.popularProduct = action.payload.data;
      state.error = null;
    },
    getDataProductFail: (state, action) => {
      state.popularProduct = {};
      state.error = action.payload.error;
    }
  }
});
export const { loadingGetData, getDataProductSuccess, getDataProductFail } = homeSlice.actions;

export default homeSlice.reducer;