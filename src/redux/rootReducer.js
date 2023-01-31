import { combineReducers } from "redux";
import renderCardsReducer from "./Reducers/renderCardsReducer";

const rootReducer = combineReducers({
  render: renderCardsReducer,
  
});

export default rootReducer;
