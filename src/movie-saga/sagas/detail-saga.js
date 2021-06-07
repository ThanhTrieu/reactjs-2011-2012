import { takeEvery, call, put } from 'redux-saga/effects';
import { api } from '../services/api';
import { GET_DETAIL_MOVIE } from '../actions/type';
import {
  loadingData,
  detailMovieSuccess,
  detailMovieFail
} from '../slice/detail-slice';
import { helper } from '../helpers/common';

function* detailMovieSaga({ id }) {
  try {
    yield put(loadingData({ loading: true }));
    const result = yield call(api.detailMovieById, id);
    if(!helper.isEmptyObject(result)){
      yield put(detailMovieSuccess({data: result}))
    } else {
      yield put(detailMovieFail({
        error: {
          cod: 400,
          message: `Not found data movie by ${id}`
        }
      }))
    }
  } catch (e) {
    yield put(detailMovieFail({
      error: {
        cod: 500,
        message: e
      }
    }))
  } finally {
    yield put(loadingData({ loading: false }));
  }
}

export function* watchDetailMovieSaga() {
  yield takeEvery(GET_DETAIL_MOVIE, detailMovieSaga);
}