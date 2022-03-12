import { useDispatch } from 'react-redux'

const Cell = ({ row, column, value }) => {
    const dispatch = useDispatch()

    const onClick = () => {
        console.log(row, column)
    }

    return (
        <div className="box" onClick={onClick}>
            {value}
        </div>
    )
}

export default Cell
