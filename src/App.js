import './App.css'

const App = () => {
    const board = new Array(64).fill(<div className="box">X</div>)
    return <div className="game-board">{board}</div>
}

export default App
