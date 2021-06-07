import { takeEvery, call, put } from 'redux-saga/effects';
import { api } from '../../services/api';
import { GET_DATA_POPULAR_PRODUCT } from './actions';
import {
  loadingGetData, getDataProductSuccess, getDataProductFail
} from './reducer';
import { helper } from '../../helpers/common';

function* popularProductSaga() {
  try {
    yield put(loadingGetData({ loading: true }));
    const result = yield call(api.getPopularProduct);
    if(!helper.isEmptyObject(result)){
      yield put(getDataProductSuccess({data: result}))
    } else {
      yield put(getDataProductFail({
        error: {
          cod: 400,
          message: `Not found data`
        }
      }))
    }
  } catch (e) {
    yield put(getDataProductFail({
      error: {
        cod: 500,
        message: e
      }
    }))
  } finally {
    yield put(loadingGetData({ loading: false }));
  }
}

export function* watchPopularProductSaga() {
  yield takeEvery(GET_DATA_POPULAR_PRODUCT, popularProductSaga);
}