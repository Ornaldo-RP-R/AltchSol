import { combineReducers } from "redux";
import gameReducer from "./Games/Games.reducer";
const rootReducer = combineReducers({
  games: gameReducer,
});

export default rootReducer;
