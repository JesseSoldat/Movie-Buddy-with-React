import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import searchMoviesReducer from '../reducers/searchMovies';
import favoritesReducer from '../reducers/favoriteMovies';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      search: searchMoviesReducer,
      favorites: favoritesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )
  return store;
};