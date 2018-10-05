import doStuffSaga from './doStuffSaga';

import Constants from './../AppConstants';

import { all, takeEvery } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        takeEvery(Constants.DO_STUFF_START, doStuffSaga)
    ]);
};
