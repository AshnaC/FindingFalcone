import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux-immutable";
import reducerRegistry from "./reducerRegistry";
import sagaRegistry from "./sagaRegistry";
import { fromJS } from "immutable";
import createSagaMiddleware from "redux-saga";

const initialState = {};
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const combine = reducers => {
  return combineReducers(reducers);
};

const reducer = combine(reducerRegistry.getReducers());
const store = createStore(
  reducer,
  fromJS(initialState),
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

reducerRegistry.setChangeListener(reducers => {
  store.replaceReducer(combine(reducers));
});
sagaRegistry.setChangeListener(sagas => {
  sagaMiddleware.run(sagas);
});
export default store;
