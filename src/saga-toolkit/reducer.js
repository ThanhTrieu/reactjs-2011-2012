import { combineReducers } from "redux";
import userReducer from './slice/users-slice';

const rootReducer = combineReducers({
  users: userReducer
});
export default rootReducer;