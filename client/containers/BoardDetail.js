import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import BoardDetail from '../components/BoardDetail'
import {composeWithTracker} from 'react-komposer'
import Collections from '/lib/collections'

//Meteor container
const onPropsChange = (props, onData) => {
  console.log("BOARD ID", props.id);
  if (Meteor.subscribe('board', props.id).ready()) {
    const board = Collections.Boards.findOne({_id:props.id})
    onData(null, {board})
  }
}

const MeteorContainer = composeWithTracker(onPropsChange)(BoardDetail)

function mapStateToProps(state){ return {} }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MeteorContainer)
