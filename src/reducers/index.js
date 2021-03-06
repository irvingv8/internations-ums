import { combineReducers } from "redux";

import groups from "./groups";
import users from "./users";

import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  groups,
  users,
  form: formReducer
});

export default rootReducer;
