import { call, put, takeLatest } from 'redux-saga/effects' //eslint-disable-line
import { delay } from 'redux-saga'
import actionSpreader from '../utils/actionspreader'

export function * asyncCounter () {
  yield call(delay, 5000)
  yield put(actionSpreader('HIDEINFO'))
}

export function * rootSaga () {
  yield takeLatest('STARTING', asyncCounter)
}

export default rootSaga
