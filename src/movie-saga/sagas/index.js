// gom cac saga lai chay
import { all, call } from 'redux-saga/effects';
import { watchMovieSaga } from './movie-saga';
import { watchDetailMovieSaga } from './detail-saga';

export default function* rootSaga() {
  yield all([
    call(watchMovieSaga),
    call(watchDetailMovieSaga),
  ])
}