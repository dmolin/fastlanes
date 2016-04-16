export default function signup(email, password) {
  return (dispatch, getState) => {
    const state = getState()

    Accounts.createUser({email:email, password:password}, (error) => {
      if(error) {
        console.log("signup failed", error)
        swal('signup failed', "please check your data and try again", "error")
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