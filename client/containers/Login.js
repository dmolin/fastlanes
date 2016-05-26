import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Login from '../components/Login'
import login from '../actions/login'

function mapStateToProps(state) {
  return {
    loginState: state.auth.loginState
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    login: login
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
