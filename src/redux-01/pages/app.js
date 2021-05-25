import React from 'react';

import IncrementCount from '../components/increment';
import DecrementCount from '../components/decrement';
import ResultCounter from '../components/result';

const AppCounter = () => {
  return (
    <>
      <IncrementCount/>
      <DecrementCount/>
      <ResultCounter/>
    </>
  )
}

export default React.memo(AppCounter)