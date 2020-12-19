import { combineReducers } from "redux";
import msgReducer from "./msgReducer";
import userReducer from "./userReducer";

// Required redux reducer combination
// The program was small enough to function well with just writing
// a root reducer here, but I wanted to keep the implementation
// more like the recommended redux principles

export default combineReducers({ msgReducer, userReducer });