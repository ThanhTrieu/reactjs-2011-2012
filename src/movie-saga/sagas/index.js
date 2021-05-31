// gom cac saga lai chay
import { all, call } from 'redux-saga/effects';
import { watchMovieSaga } from './movie-saga';

export default function* rootSaga() {
  yield all([
    call(watchMovieSaga),
  ])
}