import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import auth from "./reducers/authReducers";

const rootReducers = combineReducers({
  auth
});

const store = createStore(
  rootReducers,
  applyMiddleware(logger),
  applyMiddleware(thunk)
);

export default store;
