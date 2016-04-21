export default (nextState, replace) => {
  if(['/login', '/register'].indexOf(nextState.location.pathname) >= 0) {
    return;
  }
  
  if(!Meteor.userId()) {
    replace({
      pathname: '/login'
    })
  }
}