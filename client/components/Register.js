import React from 'react'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.handleRegistration = this.handleRegistration.bind(this)
  }

  handleRegistration(event) {
    this.props.signup($('[data-id=email]').val(), $('[data-id=password]').val())
  }

  render() {
    const {login} = this.props
    return (
      <div>
        <h1>Login</h1>

        <input placeholder="email" data-id="email" />
        <br />
        <input placeholder="password" type="password" data-id="password"/>
        <br />

        <button onClick={this.handleRegistration}>Signup</button>

      </div>
    )
  }
}

export default Register