import { all, call } from 'redux-saga/effects';
import { watchUserSaga } from './user-saga';

export default function* rootSaga() {
  yield all([
    call(watchUserSaga),
  ])
}