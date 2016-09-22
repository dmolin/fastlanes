export const ACTION_SELECT_BOARD = 'SELECT_BOARD'

export default function selectBoard(id) {
  return {
    type: ACTION_SELECT_BOARD,
    id: id 
  }
}
