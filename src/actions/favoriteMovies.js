import jsonp from 'jsonp';
import database from '../firebase/firebase';
import {isLoading} from './loading';
import {getDetails} from './searchMovies';
const apiKey = process.env.MOVIE_API;
const baseUrl = 'https://api.themoviedb.org/3/';
const callBack = 'callback=JSONP_CALLBACK';
const popular = 'sort_by=popularity.desc';

//GET_FAVORITES------------------------------------
export const getFavorites = (favorites) => ({
  type: 'GET_FAVORITES',
  favorites
});

export const startGetFavorites = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;  
    const url = `moviedb/users/${uid}/movies`;
    
    return database.ref(url)
      .once('value')
      .then(snapshot => {
        const movies = [];
        
        snapshot.forEach(childSnapshot => {
          movies.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(getFavorites(movies));
      });
  };
};


//ADD_FAVORITE------------------------------------
export const addFavorite = (favorite) => ({
  type: 'ADD_FAVORITE',
  favorite
});


export const startAddFavorite = (favorite) => {
  console.log(favorite);
  
  return (dispatch, getState) => {
    dispatch(isLoading(true));
    const uid = getState().auth.uid; 

    //GET_DETAILS to save
    const url = `${baseUrl}movie/${favorite.id}?api_key=${apiKey}`;

    jsonp(url, null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        dispatch(getDetails(data));
        dispatch(saveFavoriteToFirebase(uid, favorite));
      }
    });  
  } 
};

export const saveFavoriteToFirebase = (uid, favorite) => {
  return (dispatch) => {
    const url = `moviedb/users/${uid}/movies`;
   
    return database.ref(url).push(favorite)
      .then(ref => {
        dispatch(isLoading(false));   
        dispatch(addFavorite({
          id: ref.key,
          ...favorite
        }));
    });
  };
}









