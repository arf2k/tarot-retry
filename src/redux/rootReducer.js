import { combineReducers } from "redux";
import renderCardsReducer from "./Reducers/renderCardsReducer";
import shuffleReducer from "./Reducers/shuffleReducer";

const rootReducer = combineReducers({
  render: renderCardsReducer,
  shuffle: shuffleReducer 
  
});

export default rootReducer;
