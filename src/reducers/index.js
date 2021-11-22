import { combineReducers } from "redux";
import { displayLogsReducer } from "./displayLogsReducer";

export default combineReducers({
    pins: displayLogsReducer
})