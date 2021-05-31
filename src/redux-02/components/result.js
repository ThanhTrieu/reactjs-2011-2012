import React from 'react';
import { useSelector } from 'react-redux';
import { selectCounter } from '../slice/counter-slice';

const ResultCounter = () => {
  const count = useSelector(selectCounter);
  return (
    <h1> { count } </h1>
  )
}
export default React.memo(ResultCounter)