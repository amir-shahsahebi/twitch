import { combineReducers } from "redux";
import authReducer from "./authReducer";
// for installing redux form, we use:   npm install redux-form --legacy-peer-deps
import { reducer as formReducer } from "redux-form";
export default combineReducers({
  auth: authReducer,
  form: formReducer,
});
