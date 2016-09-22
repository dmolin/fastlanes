export default (nextState, replace) => {
  if(['/login', '/register'].indexOf(nextState.location.pathname) >= 0) {
    if(Meteor.userId()) {
      replace({
        pathname: '/'
      })
    }
    // Chain with previous onEnter hook if present
    if (this && typeof this === 'function') {
      return this(nextState, replace);
    }
    return;
  }
  
  if(!Meteor.userId()) {
    replace({
      pathname: '/login'
    })
    return;
  }

  // Chain with previous onEnter hook if present
  if (this && typeof this === 'function') {
    return this(nextState, replace);
  }
}
