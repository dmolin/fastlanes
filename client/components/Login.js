import React from 'react'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(event) {
    this.props.login($('[data-id=username]').val(), $('[data-id=password]').val())
  }

  render() {
    const {login} = this.props
    return (
      <div>
        <h1>Login</h1>

        <input placeholder="username" data-id="username" />
        <br />
        <input placeholder="password" type="password" data-id="password"/>
        <br />

        <button onClick={this.handleLogin}>Login</button>

      </div>
    )
  }
}

export default Login