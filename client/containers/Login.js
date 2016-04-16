import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Login from '../components/Login'
import login from '../actions/thunks/login'

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    login: login
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
