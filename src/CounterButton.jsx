import React from 'react'
import { useDispatch } from 'react-redux'
import { handleDecrementByOne, handleIncrementByOne } from './store/Slices/CounterSlice'

const CounterButton = () => {
    const dispatch = useDispatch()
    function handleClick(){
        dispatch(handleIncrementByOne())
        // console.log("chal gya btn-----")
    }
  return (
    <div>
        <button onClick={handleClick}>Increment</button>
        <button>Decrement</button>
    </div>
  )
}

export default CounterButton
