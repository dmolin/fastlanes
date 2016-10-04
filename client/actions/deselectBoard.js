export const ACTION_DESELECT_BOARD = 'DESELECT_BOARD'

export default function deselectBoard(id) {
  return {
    type: ACTION_DESELECT_BOARD,
    id: id 
  }
}
