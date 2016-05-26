export const ACTION_SIGNUP = 'SIGNUP'

export default function signup(email, password) {
  return {
    type: ACTION_SIGNUP,
    email: email,
    password: password
  }
}
