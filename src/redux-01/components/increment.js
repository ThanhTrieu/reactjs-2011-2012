import React from 'react';
import { incrementCounter } from '../action/index';
// su dung hooks cua react redux
import { useDispatch, useSelector } from 'react-redux';

const IncrementCount = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const clickIncrement = () => {
    // dispatch action va store
    dispatch(incrementCounter(count));
  }
  return (
    <>
      <button type="button" onClick={() => clickIncrement()}> + </button>
    </>
  )
}
export default React.memo(IncrementCount);