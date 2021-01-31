import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { langReducer } from "./langReducer";

const reducers = combineReducers({
  lang: langReducer,
});

const middleware = applyMiddleware(thunk);

export default createStore(reducers, middleware);
