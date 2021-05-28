import { call, all } from 'redux-saga/effects';
import { watchCoronaSaga } from './corona-saga';
// khai bao them saga o day

export default function* rootSaga() {
  yield all([
    call(watchCoronaSaga),
    // call them saga o day de chay
  ])
}