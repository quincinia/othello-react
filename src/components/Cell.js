import { useDispatch } from 'react-redux'
import { makeWhite, alternatePlayers } from '../reducers/boardReducer'

const Cell = ({ row, column, value }) => {
    const dispatch = useDispatch()

    const onClick = () => {
        console.log(row, column)
        dispatch(alternatePlayers(row, column))
    }

    return (
        <div className="box" onClick={onClick}>
            {value}
        </div>
    )
}

export default Cell
