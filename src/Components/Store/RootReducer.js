import { combineReducers } from "redux";
import { AuthReducers } from "./Reducers";

export default combineReducers({
   auth: AuthReducers
})