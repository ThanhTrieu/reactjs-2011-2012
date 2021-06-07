import { all, call } from 'redux-saga/effects';
import { watchPopularProductSaga } from '../pages/home/saga';

export default function* rootSaga() {
  yield all([
    call(watchPopularProductSaga)
  ])
}