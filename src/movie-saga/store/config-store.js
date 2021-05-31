import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from '../reducers/index';
import rootSaga from '../sagas/index';
import logger from 'redux-logger';

const persistRootReducer = {
  key: 'app_persist_movie',
  storage: storage,
  whitelist: ['movieReducer'] // luu ten cua reducer can luu du lieu
}

const rootReducerPersist = persistReducer(persistRootReducer, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const configureStore = (defaultState = {}) => {
  const store = createStore(
    rootReducerPersist,
    defaultState,
    applyMiddleware(
      logger,
      sagaMiddleware
    )
  );
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);
  return { store, persistor }
}
export default configureStore;