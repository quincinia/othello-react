import utils from '../utils/game_logic'
const BLACK = '1'
const WHITE = '0'
const VALID = '+'
const EMPTY = ' '

const initialBoard = new Array(8)
for (let i = 0; i < 8; i++) {
    initialBoard[i] = new Array(8)
    for (let j = 0; j < 8; j++) {
        initialBoard[i][j] = { row: i, column: j, value: EMPTY, pairs: [] }
    }
}

const initialPlayer = EMPTY

const boardReducer = (
    state = { board: initialBoard, player: initialPlayer },
    action
) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch (action.type) {
        case 'MAKE_MOVE': {
            // If cell IS NOT valid, do nothing
            // Otherwise, place marker and reversi
            // Wipe all pairs from board
            // Mark all pairs of the opposite player
            // If pairs were found, switch player
            // Otherwise, stay the same player and find valid moves for them
            // App will handle endgame state
            break
        }
        case 'START_GAME': {
            const copy = [...state.board]
            utils.turn(copy, BLACK)
            return { board: copy, player: BLACK }
        }
        case 'REVERSI': {
            const copy = [...state.board]
            const { row, column } = action.data
            utils.reversi(copy, copy[row][column])
            return { board: copy, player: state.player }
        }
        case 'SCAN': {
            const copy = [...state.board]
            const { row, column } = action.data
            utils.scan(copy, row, column)
            return { board: copy, player: state.player }
        }
        case 'TRACE_LEFT': {
            const copy = [...state.board]
            const { row, column } = action.data
            const source = copy[row][column]
            utils.trace(copy, source, { i: 0, j: -1 })
            return { board: copy, player: state.player }
        }
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
                copy[row][column] = { row, column, value, pairs: [] }
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

export const startGame = () => {
    return {
        type: 'START_GAME'
    }
}

export const traceLeft = (row, column) => {
    return { 
        type: 'TRACE_LEFT',
        data: { row, column }
    }
}

export const reversi = (row, column, value) => {
    return { 
        type: value === VALID ? 'REVERSI' : 'SCAN',
        data: { row, column }
    }
}

export const scan = (row, column) => {
    return { 
        type: 'SCAN',
        data: { row, column }
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
