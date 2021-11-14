import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, incrementByAmount} from "./features/counter/counterSlice";
import {useState} from "react";

function ReduxCounter() {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState(2)
    return(
        <div>
            <button onClick={() => {dispatch(increment())}}> + </button>
            <span>Count: {count}</span>
            <button onClick={() => {dispatch(decrement())}}> - </button>
            <br/>
            <input onChange={e => setIncrementAmount(Number(e.target.value))}/>
            <button onClick={() => {dispatch(incrementByAmount(incrementAmount))}}>Increment By Value</button>
        </div>
    )
}
export default ReduxCounter