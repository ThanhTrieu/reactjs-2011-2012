import { combineReducers } from "redux";
import { coronaReducer } from './corona-virus';

const rootReducer = combineReducers({
  corona: coronaReducer
});

export default rootReducer;