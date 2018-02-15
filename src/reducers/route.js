export default (state = '', action) => {
  if(action.type === 'ROUTE_CHANGED') {
    console.log('ROUTE_CHANGED', action.route);
    
    return action.route;
  }
  return state
}