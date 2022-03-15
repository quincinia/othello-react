import { useDispatch } from 'react-redux'
import { makeWhite, alternatePlayers, traceLeft, scan, reversi, clearPairs } from '../reducers/boardReducer'

const Cell = ({ row, column, value }) => {
    const dispatch = useDispatch()

    const onClick = () => {
        console.log(row, column)
        dispatch(reversi(row, column, value))
        dispatch(clearPairs())
    }

    return (
        <div className="box" onClick={onClick}>
            {value}
        </div>
    )
}

export default Cell
