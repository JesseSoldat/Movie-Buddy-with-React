const initialState = {
  movies: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'MOVIES_SEARCH':
      console.log('MOVIES_SEARCH', action.moviesList);
      return {
        movies: [...action.moviesList ]
      };
      
    default:
      return state;
  }
}