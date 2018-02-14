import database from '../firebase/firebase';

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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;  
    const url = `moviedb/users/${uid}/movies`;
   
    return database.ref(url).push(favorite)
      .then(ref => {
        
        dispatch(addFavorite({
          id: ref.key,
          ...favorite
        }));

      });
  };
};




