import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchBox from './SearchBox';
import {Card} from './Card';

export class SearchMoviesPage extends Component {
  renderCards = () => {
    console.log(this.props.movies);
    return this.props.movies.map(movie => <Card key={movie.id} movie={movie}  />);
  }

  render() {
    return (
      <div>
        <h3>Search Movies Page</h3>
        <SearchBox />
        <div className="card-group">
          {this.renderCards()}
        </div>
      </div>
    )
  }
} 

const mapStateToProps = ({search}) => ({
  movies: search.movies
});

export default connect(mapStateToProps)(SearchMoviesPage);