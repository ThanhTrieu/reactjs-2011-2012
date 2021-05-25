import * as types from '../action/types';

// dinh nghia state mac dinh
const initialState = {
  count: 0
}

// dinh nghia reducer
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNT:
      return {
        ...state,
        count: action.payload.val + 1
      }
    case types.DECREMENT_COUNT:
      return {
        ...state,
        count: action.payload.val - 1
      }
    default:
      return state;
  }
}