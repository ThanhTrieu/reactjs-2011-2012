import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementCounter } from '../slice/counter-slice';

const DecrementCount = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button type="button" onClick={() => dispatch(decrementCounter())}> - </button>
    </>
  )
}

export default React.memo(DecrementCount);