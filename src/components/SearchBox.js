import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startMoviesSearch} from '../actions/searchMovies';

export class SearchBox extends Component {
  state = {
    text: ''
  }

  onChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({text}));
    this.props.startMoviesSearch(text);
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.state.text}
          onChange={this.onChange}/>
      </div>
    );
  }
}
  

const mapDispatchToProps = (dispatch) => ({
  startMoviesSearch: (term) => dispatch(startMoviesSearch(term))
});

export default connect(undefined, mapDispatchToProps)(SearchBox);