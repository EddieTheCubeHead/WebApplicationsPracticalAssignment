import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";

// Required redux store implementation

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export default createStore(rootReducer, composedEnhancer);