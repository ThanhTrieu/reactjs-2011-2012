import * as types from './types';

// dinh nghia cac action
// pure function
// return object : co 2 thanh phan co ban : type va payload

export const incrementCounter = (val) => {
  return {
    type: types.INCREMENT_COUNT,
    payload: { val: val }
  }
}

export const decrementCounter = (val) => ({
  type: types.DECREMENT_COUNT,
  payload: { val }
})