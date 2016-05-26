export const ACTION_LOGIN = 'LOGIN'

export default function login(email, password) {
  return {
    type: ACTION_LOGIN,
    email: email,
    password: password
  }
}
