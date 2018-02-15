import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from './Card';
import {startGetFavorites} from '../actions/favoriteMovies';
import {changeRoute} from '../actions/route';

class FavoritesPage extends Component {
  componentDidMount() {
    this.props.changeRoute('favorite');
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
  
const mapStateToProps = ({route, favorites}) => ({
  route,
  favorites
});

const mapDispatchToProps = (dispatch) => ({
  changeRoute: (route) => dispatch(changeRoute(route)),
  startGetFavorites: () => dispatch(startGetFavorites())
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);

