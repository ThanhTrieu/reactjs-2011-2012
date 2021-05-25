import React from 'react';
import { connect } from 'react-redux';
import { decrementCounter } from '../action/index';

const DecrementCount = (props) => {

  const clickCounter = () => {
    props.clickDecrement(props.count);
  }

  return (
    <>
      <button type="button" onClick={() => clickCounter()}> - </button>
    </>
  )
}

// lay state tu reducer - sau nay chuyen thanh props cua component
const mapStateToProps = state => ({
  count: state.counter.count
});

// dispatch action vao store - sau nay chuyen thanh props cua component
const mapDispatchToProps = dispatch => ({
  clickDecrement: val => dispatch(decrementCounter(val))
});

const ConnectReduxDecrement = connect(mapStateToProps, mapDispatchToProps)(DecrementCount);

export default React.memo(ConnectReduxDecrement);