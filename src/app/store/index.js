import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import { requestData } from "./actions";
import { reducer } from "./reducer";
import * as sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}

store.dispatch(requestData());
