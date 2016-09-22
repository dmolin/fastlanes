import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Board from '../components/Board'
import selectBoard from '../actions/selectBoard'

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectBoard: selectBoard
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
