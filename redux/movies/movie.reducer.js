import { MoviesActionTypes } from "./movie.types";

const INITIAL_STATE = {
  currentMovies: null,
  copyCurrentMovies: null,
  selectedMovie: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesActionTypes.SET_CURRENT_MOVIES:
      return {
        ...state,
        currentMovies: action.payload,
        copyCurrentMovies: action.payload
      };

    case MoviesActionTypes.SET_FILTER_MOVIE:
      return {
        ...state,
        currentMovies:
          action.payload.length > 3
            ? state.currentMovies.filter(movieName => {
                return (
                  movieName.title
                    .toLowerCase()
                    .indexOf(action.payload.toLowerCase()) !== -1
                );
              })
            : state.copyCurrentMovies
      };

    case MoviesActionTypes.SET_SPECIFIC_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
