export default (state = false, action) => {
  if(action.type === 'IS_LOADING') {
    // console.log('IS_LOADING', action.loading);
    return action.loading;
  }
  return state
}