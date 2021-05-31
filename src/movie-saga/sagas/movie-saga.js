import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import { SEARCH_MOVIE } from '../actions/type';
import { api } from '../services/api';
import { helper } from '../helpers/common';

// worker-saga
function* movieSaga({ keyword }) {
  try {
    yield put(actions.startSearchMovie(true)); // non-blocking
    const result = yield call(api.searchMovieByKeyword, keyword); // blocking
    if(helper.isEmptyObject(result)){
      // ko co bo phim nao theo tu khoa tim kiem
      // non-blocking
      yield put(actions.searchNotFoundMovie({
        cod: 404,
        message: 'not found data by keyword'
      }))
    } else {
      // tim thay data theo keyword
      yield put(actions.searchMovieSuccess(result)); // non-blocking
    }
  } catch (e) {
    yield put(actions.searchMovieFail(e));
  } finally {
    yield put(actions.startSearchMovie(false));
  }
}

//watcher - saga 
export function* watchMovieSaga() {
  yield takeLatest(SEARCH_MOVIE, movieSaga);
}
