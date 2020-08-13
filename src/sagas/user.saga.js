import { put, takeEvery } from "redux-saga/effects";
import {
  INSERT_STARTED,
  INSERT_FAILED,
  INSERT_SUCCEED,
} from "../constants/user";
// import { insert } from "../actions/user.action";

function* insertName(action) {
  console.log(action);
  try {
    yield put({ type: INSERT_SUCCEED, payload: action.payload });
  } catch (error) {
    yield put({ type: INSERT_FAILED, payload: error.message });
  }
}

function* userSaga() {
  yield takeEvery(INSERT_STARTED, insertName);
}

export default userSaga;
