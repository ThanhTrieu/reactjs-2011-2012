import { call, takeEvery, put } from 'redux-saga/effects';
import * as actions from '../action/index';
import { REQUEST_SERVER_DATA } from '../action/type';
import { api } from '../service/api';
import { helper } from '../helpers/common';

// bat buoc phai dinh nghia theo generator function

// worker
function* coronaSaga() {
  try {
    //dispatch action bat dau get data
    yield put(actions.startGetDataServer(true));
    // call data tu server api
    const result = yield call(api.getDataCovid19Api);
    if(helper.isEmptyObject(result)){
      // ko co data
      yield put(actions.getDataServerFail({
        cod: 404,
        message: 'not found data'
      }));
    } else {
      // co data
      yield put(actions.getDataServerSuccess(result));
    }
  } catch (e) {
    // dispatch action thong bao loi
    yield put(actions.getDataServerFail(e));
  } finally {
    // dispacth action stop getdata
    // try: khong co loi
    // cacth: bat dc loi
    // cuoi cung van phai dung action get data lai
    // dispatch nay vao store va reducer se xu ly
    yield put(actions.finishGetDataServer(false));
  }
}

// watcher
export function* watchCoronaSaga() {
  yield takeEvery(REQUEST_SERVER_DATA, coronaSaga);
}