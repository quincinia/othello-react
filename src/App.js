import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Cell from './components/Cell'
import { initBoard, startGame } from './reducers/boardReducer'

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
        dispatch(startGame())
    }
    return <div className="game-board">{board}<p>player: {player}</p><button onClick={onClick}>start game</button></div>
}

export default App
