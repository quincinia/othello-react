import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Cell from './components/Cell'
import { initBoard } from './reducers/boardReducer'

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => dispatch(initBoard()), [])
    const { board, player } = useSelector(({ board, player }) => {
        return {
            board: board.flat().map((props) => <Cell {...props} />),
            player,
        }
    })
    return <div className="game-board">{board}<p>player: {player}</p></div>
}

export default App
