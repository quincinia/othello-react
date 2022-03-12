const BLACK = '1'
const WHITE = '0'
const VALID = '+'
const EMPTY = ' '

const initialBoard = new Array(8)
for (let i = 0; i < 8; i++) {
    initialBoard[i] = new Array(8)
    for (let j = 0; j < 8; j++) {
        initialBoard[i][j] = { row: i, column: j, value: BLACK }
    }
}

const boardReducer = (state = initialBoard, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch (action.type) {
        case 'MAKE_WHITE':
            const copy = [...state]
            const { row, column } = action.data
            copy[row][column] = { row, column, value: WHITE }
            return copy
        default:
            return state
    }
}

export const makeWhite = (row, column) => {
    return {
        type: 'MAKE_WHITE',
        data: { row, column },
    }
}

export default boardReducer
