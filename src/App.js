import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Cell from './components/Cell'
import { initBoard } from './reducers/boardReducer'

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => dispatch(initBoard()), [])
    const board = useSelector((state) =>
        state.flat().map((props) => <Cell {...props} />)
    )
    return <div className="game-board">{board}</div>
}

export default App
