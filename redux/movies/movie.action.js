import { MoviesActionTypes } from "./movie.types";

export const setCurrentMovies = movies => ({
  type: MoviesActionTypes.SET_CURRENT_MOVIES,
  payload: movies
});

export const setFilterMovie = movie => ({
  type: MoviesActionTypes.SET_FILTER_MOVIE,
  payload: movie
});

export const setSpecificMovie = movieData => ({
  type: MoviesActionTypes.SET_SPECIFIC_MOVIE,
  payload: movieData
});
