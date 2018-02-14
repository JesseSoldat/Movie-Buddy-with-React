import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


export const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard" >
          <h1>Movie Buddy</h1>
        </Link>
        <div>
          <Link to="/search" className="header__link">
            <h3>Search</h3>
          </Link>
          <Link to="/favorite"
            className="header__link">
            <h3>Favorites</h3>
          </Link>
          <button className="button">Logout</button>
        </div>
      </div>
    </div>
  </header>
);

export default connect(undefined)(Header);


