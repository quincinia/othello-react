import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Cell from './components/Cell'
import { initBoard, startGame, showMoves, movesLeft } from './reducers/boardReducer'

const App = () => {
    const dispatch = useDispatch()
    const { board, player } = useSelector(({ board, player }) => {
        return {
            board: board.flat().map((props) => <Cell {...props} />),
            player,
        }
    })
    useEffect(() => dispatch(initBoard()), [])

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
            <button onClick={() => dispatch(movesLeft())}>Moves left?</button>
        </div>
    )
}

export default App
