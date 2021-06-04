import { takeLatest, call, put } from 'redux-saga/effects';
// import * as actions from '../actions/index';
import { SEARCH_MOVIE } from '../actions/type';
import { api } from '../services/api';
import { helper } from '../helpers/common';
import {
  startSearchMovie,
  searchMovieSuccess,
  searchMovieFail,
  searchNotFoundMovie
} from '../slice/movie-slice';

// worker-saga
function* movieSaga({ keyword }) {
  try {
    yield put(startSearchMovie({ loading: true })); // non-blocking
    const result = yield call(api.searchMovieByKeyword, keyword); // blocking
    if(helper.isEmptyObject(result)){
      // ko co bo phim nao theo tu khoa tim kiem
      // non-blocking
      yield put(searchNotFoundMovie({
        message: { 
          cod: 404,
          message: 'not found data by keyword'
        }
      }))
    } else {
      // tim thay data theo keyword
      yield put(searchMovieSuccess({data: result})); // non-blocking
    }
  } catch (e) {
    yield put(searchMovieFail({ error: e }));
  } finally {
    yield put(startSearchMovie({loading: false}));
  }
}

//watcher - saga 
export function* watchMovieSaga() {
  yield takeLatest(SEARCH_MOVIE, movieSaga);
}
