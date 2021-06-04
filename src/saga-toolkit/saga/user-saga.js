import { takeEvery, call, put } from 'redux-saga/effects';
import { api } from '../services/api';
import { REQUEST_DATA_USERS } from '../actions/users-action';
import { startGetData, getDataSuccess, getDataFail } from '../slice/users-slice';
import { helper } from '../helpers/common';

function* usersSaga() {
  try {
    yield put(startGetData({ loading: true }));
    const users = yield call(api.getListUsers);
    if(!helper.isEmptyObject(users)){
      yield put(getDataSuccess({data: users}))
    } else {
      yield put(getDataFail({
        error: {
          cod: 500,
          message: 'Not found data'
        }
      }));
    }
  } catch (e) {
    yield put(getDataFail({
      error: {
        cod: 500,
        message: e
      }
    }));
  } finally {
    yield put(startGetData({ loading: false }));
  }
}

export function* watchUserSaga() {
  yield takeEvery(REQUEST_DATA_USERS, usersSaga);
}