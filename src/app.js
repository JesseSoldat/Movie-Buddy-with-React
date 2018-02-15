import 'normalize.css/normalize.css';
import './styles/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { firebase } from './firebase/firebase';
import AppRouter, {history} from './routers/AppRouter';
import { login, logout } from './actions/auth';
import { startGetFavorites } from './actions/favoriteMovies';
import LoadingPage from './components/LoadingPage';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />,
  document.getElementById('app')
);


firebase.auth().onAuthStateChanged(user => {
  if(user) {
    store.dispatch(login(user.uid));
    store.dispatch(startGetFavorites()).then(() => {
      renderApp();
    });
  } else {
    store.dispatch(logout());
    renderApp();  
    history.push('/');
  }
})
