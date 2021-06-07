import  { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import movieReducer  from './movie-slice';
import detailMovieReducer from './detail-slice';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { connectRouter } from 'connected-react-router';

// tao config persist luu cho cac reducer
const persistMovie = {
  key: 'persist_movie',
  storage: storage,
  whitelist: ['movies'] // chi luu du lieu can thiet
}

const rootReducer = (history) => combineReducers({
  movieReducer: persistReducer(persistMovie, movieReducer),
  router: connectRouter(history),
  detailMovie: detailMovieReducer,
});
export default rootReducer;
