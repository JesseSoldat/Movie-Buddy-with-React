import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startMoviesSearch} from '../actions/searchMovies';

export class DashboardPage extends Component {

  componentWillMount() {
    this.props.startMoviesSearch('xmen');

  }

  render() {
    return (
      <div>DashboardPage</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startMoviesSearch: (term) => dispatch(startMoviesSearch(term))
})

export default connect(undefined, mapDispatchToProps)(DashboardPage);