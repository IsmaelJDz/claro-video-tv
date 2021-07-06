import { MoviesActionTypes } from "./movie.types";

const INITIAL_STATE = {
  currentMovies: [],
  filterMovie: []
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesActionTypes.SET_CURRENT_MOVIES:
      return {
        ...state,
        currentMovies: action.payload,
      };

    case MoviesActionTypes.SET_FILTER_MOVIE:

      return {
        ...state,
        filterMovie:
          action.payload.length > 2
            ? [...state.currentMovies].filter(movieName => {
                return (
                  movieName.title
                    .toLowerCase()
                    .indexOf(action.payload.toLowerCase()) !== -1
                );
              })
            : state.currentMovies
      };

    default:
      return state;
  }
};

export default userReducer;
