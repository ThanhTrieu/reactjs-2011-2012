import counterReducer from './slice/counter-slice';

const rootReducer = {
  reducer: {
    counter: counterReducer
  }
};

export default rootReducer;