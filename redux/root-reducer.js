import { combineReducers } from "redux";

import movieReducer from "./movies/movie.reducer";

export default combineReducers({
  movies: movieReducer
});
