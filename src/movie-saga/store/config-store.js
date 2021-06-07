import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { routerMiddleware } from 'connected-react-router';
import history from '../helpers/history';
import rootReducer from '../slice/index';
import rootSaga from '../sagas/index';
import logger from 'redux-logger';

const persistRootReducer = {
  key: 'app_persist_movie',
  storage: storage,
  blacklist: ['router', 'detailMovie'] // loai tru cac reducer ko luu vao redux persist
}

const rootReducerPersist = persistReducer(persistRootReducer, rootReducer(history));

const sagaMiddleware = createSagaMiddleware();

const configureStore = (defaultState = {}) => {
  const store = createStore(
    rootReducerPersist,
    defaultState,
    applyMiddleware(
      routerMiddleware(history),
      logger,
      sagaMiddleware
    )
  );
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);
  return { store, persistor, history }
}
export default configureStore;