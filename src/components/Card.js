import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startAddFavorite} from '../actions/favoriteMovies';
import {startRemoveFromSearch} from '../actions/searchMovies';

export class Card extends Component {
  onFavorite = () => {
    this.props.startAddFavorite(this.props.movie);
    this.props.startRemoveFromSearch(this.props.movie.id);
  }

  render() {
    return (
      <div className="card">
        <h4 className="card__title">{this.props.movie.title}</h4>
        <img className="card__poster"
          src={`http://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`} alt="movie poster"
        />
        <div className="card__button-group">
          <button onClick={this.onFavorite}>Favorite</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({search}, {movie}) => ({
  term: search.term,  
  movie
});

const mapDispatchToProps = (dispatch) => ({
  startAddFavorite: (movie) => dispatch(startAddFavorite(movie)),
  startRemoveFromSearch: (id) => dispatch(startRemoveFromSearch(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);


