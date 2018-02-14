export default (movieList, favoriteList) => {
  return movieList.filter(movie => compareId(movie.id, favoriteList));
}

function compareId(id, favoriteList) {
  let match = favoriteList.find(favorite => (favorite.id === id));
  if(match === undefined) {
    return true;
  }
  return false;
  
}