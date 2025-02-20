import { combineReducers } from "redux";
import authedUser from "./autherUser";
import users from "./users";
import polls from "./polls";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  authedUser,
  users,
  loadingBarReducer,
  polls,
});
