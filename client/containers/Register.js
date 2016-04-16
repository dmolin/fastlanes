import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Register from '../components/Register'
import signup from '../actions/thunks/signup'

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signup: signup
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
