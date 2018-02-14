export default (state = '', action) => {
  if(action.type === 'ROUTE_CHANGED') {
    return action.route;
  }
  return state
}