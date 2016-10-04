import {ACTION_SELECT_BOARD} from '../actions/selectBoard'
import {ACTION_DESELECT_BOARD} from '../actions/deselectBoard'

export const initialState = {
}

export default function(state = initialState, action) {
  const {type, id} = action

  switch(type) {
    case ACTION_SELECT_BOARD: 
      return Object.assign({}, state, {boardId: id})
    case ACTION_DESELECT_BOARD:
      return Object.assign({}, initialState)
    default:
      return state
  }
}
