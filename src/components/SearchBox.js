import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startMoviesSearch} from '../actions/searchMovies';

export class SearchBox extends Component {
  state = {
    text: ''
  }
  componentDidMount() {
    this.setState(() => ({text: this.props.term}));
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

const mapStateToProps = ({search}) => ({
  term: search.term
});
  
const mapDispatchToProps = (dispatch) => ({
  startMoviesSearch: (term) => dispatch(startMoviesSearch(term))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);