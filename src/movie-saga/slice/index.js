import  { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import movieReducer  from './movie-slice';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// tao config persist luu cho cac reducer
const persistMovie = {
  key: 'persist_movie',
  storage: storage,
  whitelist: ['movies'] // chi luu du lieu can thiet
}

const rootReducer = combineReducers({
  movieReducer: persistReducer(persistMovie, movieReducer)
});
export default rootReducer;
