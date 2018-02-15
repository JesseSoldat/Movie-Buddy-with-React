import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

function renderTitle(isAuthenticated) {
  console.log(isAuthenticated);
  
  return (
    isAuthenticated ? (
      <Link className="header__title" to="/dashboard" >
        <h1>Movie Buddy</h1>
      </Link>
    ) : (
      <Link className="header__title" to="/" >
        <h1>Movie Buddy</h1>
      </Link>
    )
  )
}

function renderLinks(isAuthenticated, startLogout) {
  return (
    isAuthenticated ? (
      <div>
        <Link to="/search" className="header__link">
          <h3>Search</h3>
        </Link>
        <Link to="/favorite"
          className="header__link">
          <h3>Favorites</h3>
        </Link>
        <button className="button"
          onClick={startLogout}>
          Logout
        </button>
      </div>
    ) : (
      <div>
        <Link to="/login" className="header__link">
          <h3>Login</h3>
        </Link>
        <Link to="/register" className="header__link">
          <h3>Register</h3>
        </Link>
      </div>
    )
  )
}

export const Header = ({isAuthenticated, startLogout}) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        {renderTitle(isAuthenticated)}
        {renderLinks(isAuthenticated, startLogout)}
      </div>
    </div>
  </header>
);

const mapStateToProps = ({auth}) => ({
  isAuthenticated: !!auth.uid
});

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);


