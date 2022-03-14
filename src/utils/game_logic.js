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
    cell.value = cell.value === BLACK
        ? WHITE
        : BLACK
}

const trace = (board, source, direction) => {
    let { row: traceRow, column: traceColumn } = source
    let { i, j } = direction
    console.log(`tracing cell (${source.row},${source.column})`)
    console.log(`trace vector <${i},${j}>`)

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
    console.log(
        `added (${traceRow}, ${traceColumn}) as a pair to (${source.row}, ${source.column})`
    )
    return true
}

const scan = (board, row, column) => {
    let validMove = false
    let rowStart = row - 1,
        rowEnd = rowStart + 3
    let columnStart = column - 1,
        columnEnd = columnStart + 3

    let source = board[row][column]
    for (let i = rowStart; i < rowEnd; i++) {
        for (let j = columnStart; j < columnEnd; j++) {
            if (oob(i, j)) continue
            console.log(`checking cell (${i},${j})`)
            if (board[i][j].value === oppositeColor(source))
                validMove = trace(board, source, { i: i - row, j: j - column })
        }
    }

    return validMove
}

const reversi = (board, source) => {
    let newColor = source.value;
    for (let pair of source.pairs) {
        newColor = pair.value
        let { row: travelRow, column: travelColumn } = source
        // Generate unit vectors for the trace direction
        let j = +(pair.column > source.column) || -(pair.column < source.column)
        let i = +(pair.row > source.row) || -(pair.row < source.row)

        console.log(`flipping from (${travelRow}, ${travelColumn})`)
        console.log(`travel direction <${i},${j}>`)
        console.log(`stopping at (${pair.row}, ${pair.column})`);
        while (!(travelRow + i === pair.row && travelColumn + j === pair.column)) {
            travelRow += i
            travelColumn += j
            console.log(`flipping {${travelRow}, ${travelColumn}}`)
            flip(board[travelRow][travelColumn])
        }
    }
    source.pairs = []
    source.value = newColor
}

export default { trace, scan, reversi }
