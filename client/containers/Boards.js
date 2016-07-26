import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Boards from '../components/Boards'
import {composeWithTracker} from 'react-komposer'
import Collections from '/lib/collections'

//react+komposer Meteor container
const onPropsChange = (props, onData) => {
  if (Meteor.subscribe('boards').ready()) {
    const boards = Collections.Boards.find().fetch()
    onData(null, {boards})
  }
}

const MeteorContainer = composeWithTracker(onPropsChange)(Boards)

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MeteorContainer)
