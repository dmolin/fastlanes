import {ACTION_SELECT_BOARD} from '../actions/selectBoard'

export const initialState = {
}

export default function(state = initialState, action) {
  const {type, id} = action

  switch(type) {
    case ACTION_SELECT_BOARD: 
      return Object.assign({}, state, {boardId: id})
    default:
      return state
  }
}
