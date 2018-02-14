import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchBox from './SearchBox';
import Card from './Card';
import newMoviesSelector from '../selectors/newMovies';
import {changeRoute} from '../actions/route';

export class SearchMoviesPage extends Component {
  componentDidMount() {
    this.props.changeRoute('search');
  }

  renderCards = () => {
    return this.props.movies.map(movie => <Card key={movie.id} movie={movie} route={this.props.route}  />);
  }

  render() {
    console.log(this.props);
    
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

const mapStateToProps = ({route, search, favorites}) => ({
  route,
  movies: newMoviesSelector(search.movies, favorites)
});

const mapDispatchToProps = (dispatch) => ({
  changeRoute: (route) => dispatch(changeRoute(route))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMoviesPage);