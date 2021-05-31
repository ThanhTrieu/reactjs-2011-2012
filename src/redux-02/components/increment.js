import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementCounter } from '../slice/counter-slice';

const IncrementCount = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button type="button" onClick={() => dispatch(incrementCounter())}> + </button>
    </>
  )
}
export default React.memo(IncrementCount);