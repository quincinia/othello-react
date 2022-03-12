import { useDispatch } from 'react-redux'
import { makeWhite } from '../reducers/boardReducer'

const Cell = ({ row, column, value }) => {
    const dispatch = useDispatch()

    const onClick = () => {
        console.log(row, column)
        dispatch(makeWhite(row, column))
    }

    return (
        <div className="box" onClick={onClick}>
            {value}
        </div>
    )
}

export default Cell
