const BLACK = '1'
const WHITE = '0'
const VALID = '+'
const EMPTY = ' '

const initialBoard = new Array(8)
for (let i = 0; i < 8; i++) {
    initialBoard[i] = new Array(8)
    for (let j = 0; j < 8; j++) {
        initialBoard[i][j] = { row: i, column: j, value: EMPTY }
    }
}

const initialPlayer = BLACK

const boardReducer = (
    state = { board: initialBoard, player: initialPlayer },
    action
) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch (action.type) {
        case 'ALTERNATE_PLAYERS': {
            const copy = [...state.board]
            const { row, column } = action.data
            copy[row][column] = { row, column, value: state.player }
            let nextPlayer = state.player === BLACK ? WHITE : BLACK
            return { board: copy, player: nextPlayer }
        }
        case 'INIT_BOARD': {
            const copy = [...state.board]
            for (const { row, column, value } of action.data) {
                console.log(row, column, value)
                copy[row][column] = { row, column, value }
            }
            return { board: copy, player: state.player }
        }
        case 'MAKE_WHITE': {
            const copy = [...state.board]
            const { row, column } = action.data
            copy[row][column] = { row, column, value: WHITE }
            return { board: copy, player: state.player }
        }
        default:
            return state
    }
}

export const alternatePlayers = (row, column) => {
    return {
        type: 'ALTERNATE_PLAYERS',
        data: { row, column },
    }
}

export const makeWhite = (row, column) => {
    return {
        type: 'MAKE_WHITE',
        data: { row, column },
    }
}

export const initBoard = () => {
    return {
        type: 'INIT_BOARD',
        data: [
            { row: 3, column: 3, value: BLACK },
            { row: 3, column: 4, value: WHITE },
            { row: 4, column: 3, value: WHITE },
            { row: 4, column: 4, value: BLACK },
        ],
    }
}
export default boardReducer
