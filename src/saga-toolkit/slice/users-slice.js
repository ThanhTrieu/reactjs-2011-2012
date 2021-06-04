import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    loading: true,
    dataUsers: {},
    error: null
  },
  reducers: {
    startGetData: (state, action) => {
      state.loading = action.payload.loading
    },
    getDataSuccess: (state, action) => {
      state.error = null;
      state.dataUsers = action.payload.data
    },
    getDataFail: (state, action) => {
      state.dataUsers= {};
      state.error = action.payload.error;
    }
  }
});

export const { startGetData, getDataSuccess, getDataFail } = userSlice.actions;
export default userSlice.reducer;