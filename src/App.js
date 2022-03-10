import './App.css'
import Cell from './components/Cell'
import { useSelector } from 'react-redux'

const App = () => {
    const board = useSelector((state) =>
        state.map((props) => <Cell {...props} />)
    )
    return <div className="game-board">{board}</div>
}

export default App
