import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    // dinh nghia cac action cap nhap state
    incrementCounter: (state) => {
      //Redux Toolkit allows us to write "mutating" logic in reducers
      state.count += 1;
    },
    decrementCounter: (state) => {
      state.count -= 1;
    }
  }
});

// xem method createSlice tra ve nhung cai gi ???
// console.log(slice);

// export cac actions de sau nay dispatch vao store
export const { incrementCounter,  decrementCounter } = slice.actions;

// export selector get state
export const selectCounter = state => state.counter.count;

// export reducer
export default slice.reducer;