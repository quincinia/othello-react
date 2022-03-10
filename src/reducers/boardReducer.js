const BLACK = '1'
const WHITE = '0'
const VALID = '+'
const EMPTY = ' '

const initialBoard = new Array(64).fill({ row: 0, column: 0, value: BLACK })

const boardReducer = (state = initialBoard, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch (action.type) {
        default:
            return state
    }
}

export const initBoard = () => {
    
}

export default boardReducer