import jsonp from 'jsonp';

export const moviesSearch = (moviesList, term) => ({
  type: 'MOVIES_SEARCH',
  term,
  moviesList
});

export const startRemoveFromSearch = (id) => {
  return (dispatch, getState) => {
    const movies = getState().search.movies;
    const term = getState().search.term;

    const newList = movies.filter(movie => movie.id !== id);
    dispatch(moviesSearch(newList, term));
  }
}

export const startMoviesSearch = (term) => {
  return (dispatch) => {
    const apiKey = process.env.MOVIE_API;
    const baseUrl = 'https://api.themoviedb.org/3/';
    const callBack = 'callback=JSONP_CALLBACK';
    const popular = 'sort_by=popularity.desc';

    jsonp(`${baseUrl}search/movie?query=${term}&${popular}&api_key=${apiKey}&${callBack}`, null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        dispatch(moviesSearch(data.results, term));
      }
    });
  }

}