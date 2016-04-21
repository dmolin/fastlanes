export default (nextState, replace) => {
  if(['/login', '/register'].indexOf(nextState.location.pathname) >= 0) {
    if(Meteor.userId()) {
      replace({
        pathname: '/'
      })
    }
    return;
  }
  
  if(!Meteor.userId()) {
    replace({
      pathname: '/login'
    })
  }
}