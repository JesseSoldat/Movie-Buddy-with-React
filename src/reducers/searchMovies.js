const initialState = {
  term: '',
  movies: [],
  details: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'MOVIES_SEARCH':
      // console.log('MOVIES_SEARCH', action.moviesList);
      return {
        ...state,
        term: action.term,
        movies: [...action.moviesList ],
      };

    case 'GET_DETAILS':
      // console.log('GET_DETAILS', action.movie);
      return {
        ...state,
        details: action.movie
      }; 
      
    default:
      return state;
  }
}