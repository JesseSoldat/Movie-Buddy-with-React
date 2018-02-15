import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startGetDetails} from '../actions/searchMovies';
import {history} from '../routers/AppRouter';
import LoadingPage from './LoadingPage';

export class MovieDetailsPage extends Component {

  componentDidMount() {
    this.props.startGetDetails(this.props.id);
  }

  renderListItem = (string, prop) => (prop ? (
      <li className="list_item">
          <div>
            <strong>{string}</strong>
            <br/>
            {prop}
           </div>
        </li>
    ) : ''
  )

  renderListArrayItems = (string, array = []) => {
    if(array.length === 0) { return; }

    const elementsMap = array.map((element, i) => {
      if(array.length === i + 1) {
        return (
          <span key={element.id}>{element.name}</span> 
         );
      }
      return (
        <span key={element.id}>{element.name}, </span> 
       );
    });

    return (
      <li className="list_item">
        <div>
          <strong>{string}</strong>
          <br/>
          {elementsMap}
        </div>
      </li>
    );
  }

  renderListLinkItem = (string, prop) => (prop ? (
    <li className="list__item">
      <strong>{string}</strong>
      <br/>
      <a href={prop} target="_blank">
      {prop}
      </a>
    </li>
    ) : (
      ''
    )
  )

  goBack = () => {
    history.push(`/${this.props.route}`);   
  }
   

  render() {
    const { movie } = this.props;
    const { title, poster_path, original_title, release_date, vote_average, genres, production_companies, overview, homepage } = movie;

    if(this.props.loading) {
      return <LoadingPage />
    }
 
    return (
      <div className="content-container">
        <div className="pannel">
          <div className="pannel__header">
            <h2><strong>{title}</strong></h2>
          </div>
          <div className="panel__body">
            <div className="panel__poster">
              {
                poster_path ? (
                <img 
                  src={`http://image.tmdb.org/t/p/w500/${poster_path}`} 
                  alt="poster image" 
                  className="pannel__image" 
                />
                ) : (
                <img 
                  src="/images/noFilm.png" 
                  alt="poster image" 
                  className="pannel__image" 
                />            
                )
              }
            </div>

            <div className="panel__details">
              <ul className="panel__list">
                {this.renderListItem('Original Title: ', original_title)}
                {this.renderListItem('Release Date: ', release_date)}
                {this.renderListItem('Rating: ', vote_average)}
                {this.renderListArrayItems('Genres: ', genres)}  
                {this.renderListArrayItems('Production Company:  ', production_companies)}  
                {this.renderListItem('Description: ', overview)}
                {this.renderListLinkItem('Home Page: ', homepage)}
                <div>
                  <br/>
                  <button className="button"
                    onClick={this.goBack}
                  >
                    Go Back
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>   
    )
  }
}

const mapStateToProps = ({loading, search, route}, props) => ({
  id: props.match.params.id,
  movie: search.details,
  route,
  loading
});

const mapDispatchToProps = (dispatch) => ({
  startGetDetails: (id) => dispatch(startGetDetails(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);

