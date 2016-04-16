export const ACTION_LOGGED_IN = 'LOGGED_IN'

export default function loggedIn(data) {
  return {
    type: ACTION_LOGGED_IN,
    data: data
  }
}