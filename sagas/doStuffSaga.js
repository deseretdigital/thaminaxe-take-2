import Constants from './../AppConstants';
import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

export default function* doStuffSaga() {
  yield call(delay, 2000);
  yield put({ type: Constants.DO_STUFF });
}
