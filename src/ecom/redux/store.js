import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const configStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      logger,
      sagaMiddleware
    )
  );
  sagaMiddleware.run(rootSaga);
  return { store }
}

export default configStore;