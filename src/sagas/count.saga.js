import {
  CLICK_FAILED,
  CLICK_SUCCEEDED,
  CLICK_STARTED,
} from "../constants/count";
import { put, takeEvery } from "redux-saga/effects";
import { increaseCount } from "../actions/count.action";

function* increase(action) {
  try {
    const increasedNumber = yield increaseCount(action.payload);
    yield put({ type: CLICK_SUCCEEDED, payload: increasedNumber });
  } catch (error) {
    yield put({ type: CLICK_FAILED, payload: error.message });
  }
}

function* increaseSaga() {
  yield takeEvery(CLICK_STARTED, increase);
}

export default increaseSaga;
