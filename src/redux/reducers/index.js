import { combineReducers } from "redux";
import authedUser from "./autherUser";
import users from "./users";

export default combineReducers({
  authedUser,
  users,
});
