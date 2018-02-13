import React, {Component} from 'react';
import SearchBox from './SearchBox';

export class SearchMoviesPage extends Component {
  render() {
    return (
      <div>
        <h3>Search Movies Page</h3>
        <SearchBox />
      </div>
    )
  }
}

export default SearchMoviesPage;