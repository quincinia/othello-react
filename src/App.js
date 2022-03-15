import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Cell from './components/Cell'
import { initBoard, startGame, showMoves, movesLeft } from './reducers/boardReducer'

const App = () => {
    const dispatch = useDispatch()
    const { board, player, blackCount, whiteCount } = useSelector(({ board, player }) => {
        let flat = board.flat()
        console.log(flat)
        return {
            board: flat.map((props) => <Cell {...props} />),
            player,
            blackCount: flat.reduce((count, cell) => cell.value === '1' ? count+1 : count, 0),
            whiteCount: flat.reduce((count, cell) => cell.value === '0' ? count+1 : count, 0)
        }
    })
    useEffect(() => dispatch(initBoard()), [])
    // useEffect(() => dispatch(showMoves(player)), [player])
    const onClick = () => {
        dispatch(initBoard())
        dispatch(startGame())
    }

    const playerTurn = (player) => {
        return () => dispatch(showMoves(player))
    }

    return (
        <div className="game-board">
            {board}
            <p>player: {player}</p>
            <button onClick={onClick}>start game</button>
            <button onClick={playerTurn('1')}>Black's Moves</button>
            <button onClick={playerTurn('0')}>White's Moves</button>
            <p>{player === '' ? 'Game over!' : null}</p>
            <p>Black: {blackCount}</p>
            <p>White: {whiteCount}</p>
        </div>
    )
}

export default App
