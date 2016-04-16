export default function login(username, password) {
  return (dispatch, getState) => {
    const state = getState()

    Meteor.loginWithPassword(username, password, (error) => {
      if(error) {
        console.log("login failed")
        swal("login failed", "please check your username and/or password", "error")
        //ideally I need to dispatch a FLASH_MESSAGE action with the error
        //that action will store the message in a flashMessage property in the store
        //then I'll build a component that display whatever message we've there (until dismissed)
        //and then on route change? I should clear the message (so, another action to clear it?)
      } else {
        //dispatch(login(Meteor.user()))
        Meteor.logoutOtherClients()
      }
    })
  }
}