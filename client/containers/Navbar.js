import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {composeWithTracker} from 'react-komposer'
import Navbar from '../components/Navbar'
import logout from '../actions/logout'

export const onPropsChange = (props, onData) => {
  onData(null, {currentUser: Meteor.user()})
}

const MeteorContainer = composeWithTracker(onPropsChange)(Navbar)

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logout: logout
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MeteorContainer)