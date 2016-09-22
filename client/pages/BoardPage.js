import React from 'react'
import BoardDetail from '../containers/BoardDetail'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import selectBoard from '../actions/selectBoard'

class BoardPage extends React.Component {
  componentDidMount() {
    this.props.selectBoard(this.props.params.id);
  }

  renderBoardDetailWhenReady() {
    return (this.props.id ? <BoardDetail id={this.props.id} /> : null)
  }

  render() {
    //turn the param bound value into a simple prop for the BoardDetail container
    return (
      <div className='board-detail'>
        {this.renderBoardDetailWhenReady()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    id: state.boards.boardId
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectBoard
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardPage)
