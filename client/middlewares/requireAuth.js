export default (nextState, replace) => {
  if(!Meteor.userId()) {
    replace({
      pathname: '/login'
    })
  }
}