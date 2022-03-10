import './App.css'
import Cell from './components/Cell'

const App = () => {
    const board = new Array(64).fill(<Cell row={0} column={0} value={'X'} />)
    return <div className="game-board">{board}</div>
}

export default App
