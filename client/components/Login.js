import React from 'react'
import Navbar from './Navbar'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(event) {
    this.props.login($('[data-id=username]').val(), $('[data-id=password]').val())
  }

  render() {
    const {login, route} = this.props
    const path = route.path ? route.path.substr(1) : 'none'

    return (
      <div>
        <Navbar />
        <div className={`main-container route-` + path}>
          <div className="container container--unpadded">
            <h1>Login into your Fastlanes account</h1>

            <input placeholder="username" data-id="username" />
            <br />
            <input placeholder="password" type="password" data-id="password"/>
            <br />

            <button onClick={this.handleLogin}>Login</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login