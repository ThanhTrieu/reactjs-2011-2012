import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import rootReducer from './reducer';
import rootSaga from './saga/index';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const configureStore = ( initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      logger,
      sagaMiddleware
    )
  );
  sagaMiddleware.run(rootSaga);
  return { store };
}
export default configureStore;