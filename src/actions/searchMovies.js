import jsonp from 'jsonp';
import {isLoading} from './loading';
const apiKey = process.env.MOVIE_API;
const baseUrl = 'https://api.themoviedb.org/3/';
const callBack = 'callback=JSONP_CALLBACK';
const popular = 'sort_by=popularity.desc';


export const startRemoveFromSearch = (id) => {
  return (dispatch, getState) => {
    const movies = getState().search.movies;
    const term = getState().search.term;

    const newList = movies.filter(movie => movie.id !== id);
    dispatch(moviesSearch(newList, term));
  }
}

//MOVIES_SEARCH------------------------------------
export const moviesSearch = (moviesList, term) => ({
  type: 'MOVIES_SEARCH',
  term,
  moviesList
});

export const startMoviesSearch = (term) => {
  return (dispatch) => {
    const url = `${baseUrl}search/movie?query=${term}&${popular}&api_key=${apiKey}&${callBack}`;

    jsonp(url, null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        dispatch(moviesSearch(data.results, term));
      }
    });
  }

}

//GET_DETAILS------------------------------------
export const getDetails = (movie = {}) => ({
  type: 'GET_DETAILS',
  movie
});

export const startGetDetails = (id) => {
  return (dispatch, getState) => {
  dispatch(isLoading(true));
   const url = `${baseUrl}movie/${id}?api_key=${apiKey}`;

    jsonp(url, null, (err, data) => {
      if (err) {
        dispatch(isLoading(false));
        console.error(err.message);
      } else {
        dispatch(isLoading(false));
        dispatch(getDetails(data));
      }
    });
  }
}