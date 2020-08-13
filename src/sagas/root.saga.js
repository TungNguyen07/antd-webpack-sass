import countSaga from "./count.saga";
import userSaga from "./user.saga";
import { all } from "redux-saga/effects";

export default function* () {
  yield all([userSaga(), countSaga()]);
}
