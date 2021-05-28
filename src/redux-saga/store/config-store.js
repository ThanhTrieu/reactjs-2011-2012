import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer/index';
import rootSaga from '../saga/index';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const configStore = ( initialState = {} ) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      logger,
      sagaMiddleware
    )
  );
  // run saga
  sagaMiddleware.run(rootSaga);
  return { store }
}
export default configStore;