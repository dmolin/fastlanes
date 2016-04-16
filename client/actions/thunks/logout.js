export default function logout() {
  return (dispatch, getState) => {
    const state = getState()

    Meteor.logout((error) => {
      if(error) {
        console.log("logout failed")
        swal("logout failed", "Oops... something whent wrong. please try again", "error")
      }
    })
  }
}