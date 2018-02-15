import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startAddFavorite} from '../actions/favoriteMovies';
import {startRemoveFromSearch, getDetails} from '../actions/searchMovies';
import {history} from '../routers/AppRouter';

export class Card extends Component {
  onFavorite = () => {
    this.props.startAddFavorite(this.props.movie);
    this.props.startRemoveFromSearch(this.props.movie.id);
  }

  onDelete = () => {
    console.log('deleted');
    
  }

  onViewDetails = () => {
    this.props.getDetails({});
    history.push({
      pathname: `${this.props.route}/details/${this.props.movie.id}`,
      state: {
        from: this.props.route
      }
    });

  }

  truncateText = (text, amount) => {
    if(text.length >= amount) {
      return text.slice(0, amount) + '...';
    }
    return text;
  }

  renderPosterPath = () => {
    const { movie } = this.props;
    const { poster_path } = movie;
    return (
      poster_path ? (
        <img className="card__poster"
          src={`http://image.tmdb.org/t/p/w500/${poster_path}`} 
          alt="movie poster"
        />
      ) : 
      <img className="card__poster"
          src="/images/noFilm.png" 
          alt="movie poster"
        />     
    );
  }

  render() {
    return (
      <div className="card">
        <h4 className="card__title">{this.truncateText(this.props.movie.title, 23)}</h4>
        {this.renderPosterPath()}
        <div className="card__button-group">
          {this.props.route === 'search' ? (
          <div>
            <button
              className="button button__dark"
              onClick={this.onViewDetails}
            >
              View
            </button>
            <button 
              className="button button__light"
              onClick={this.onFavorite}>Favorite
            </button>
          </div>
          ) : (
          <div>
            <button
              className="button button__dark"
              onClick={this.onViewDetails}              
            >
              View
            </button>
            <button 
              className="button button__light"
              onClick={this.onDelete}>Delete
            </button>
          </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({search, route}, {movie}) => ({
  term: search.term,  
  route,
  movie
});

const mapDispatchToProps = (dispatch) => ({
  startAddFavorite: (movie) => dispatch(startAddFavorite(movie)),
  startRemoveFromSearch: (id) => dispatch(startRemoveFromSearch(id)),
  getDetails: (emptyObj) => dispatch(getDetails(emptyObj))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);


