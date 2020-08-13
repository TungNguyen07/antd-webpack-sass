import { countReducer } from "./reducers/countReducer";
import { userReducer } from "./reducers/userReducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./sagas/root.saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  countReducer,
  userReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
