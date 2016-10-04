import React from 'react'
import BoardDetail from '../containers/BoardDetail'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import selectBoard from '../actions/selectBoard'
import deselectBoard from '../actions/deselectBoard'

class BoardPage extends React.Component {
  componentDidMount() {
    //Dispatch a selectBoard action. this will render the boardId into the redux state tree
    //also, we turn the param bound value into a simple prop for the BoardDetail container
    this.props.selectBoard(this.props.params.id);
  }

  componentWillUnmount() {
    this.props.deselectBoard(this.props.params.id)
  }

  render() {
    return (this.props.id ? 
      <div className='board-detail-page'>
        <BoardDetail id={this.props.id} />
      </div>
      : null)
  }
}

function mapStateToProps(state) {
  return {
    id: state.boards.boardId
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectBoard,
    deselectBoard
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardPage)
