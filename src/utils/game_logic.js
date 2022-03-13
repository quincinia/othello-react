const BLACK = '1'
const WHITE = '0'
const VALID = '+'
const EMPTY = ' '

// True if out of bounds
const oob = (row, column) => {
    return row > 7 || row < 0 || column > 7 || column < 0
}

const oppositeColor = (cell) => {
    return cell.value === BLACK ? WHITE : BLACK
}

const flip = (cell) => {
    return cell.value === BLACK
        ? { ...cell, value: WHITE }
        : { ...cell, value: BLACK }
}

const trace = (board, source, direction) => {
    let { row: traceRow, column: traceColumn } = source
    let { i, j } = direction

    // Trace until the first non-opposite color
    do {
        traceRow += i
        traceColumn += j
        if (oob(traceRow, traceColumn)) return false
    } while (board[traceRow][traceColumn].value === oppositeColor(source))

    if (board[traceRow][traceColumn].value === source.value) return false

    if (board[traceRow][traceColumn].value === EMPTY)
        board[traceRow][traceColumn] = {
            ...board[traceRow][traceColumn],
            value: VALID,
        }

    board[traceRow][traceColumn].pairs.push(source)
}

const scan = (board, row, column) => {}

const reversi = (board, row, column) => {}
