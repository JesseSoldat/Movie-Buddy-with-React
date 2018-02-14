import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from './Card';
import {startGetFavorites} from '../actions/favoriteMovies';

class FavoritesPage extends Component {
  componentDidMount() {
    this.props.startGetFavorites();
  }

  render() {
    return (
      <div>
        {this.props.favorites.map(favorite => (<Card key={favorite.id} movie={favorite} />))}
      </div>
    );
  }
}
  
const mapStateToProps = ({favorites}) => ({
  favorites
});

const mapDispatchToProps = (dispatch) => ({
  startGetFavorites: () => dispatch(startGetFavorites())
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);

