import React from 'react'
import { Increment, Decrement } from './counterSlice'
import { useSelector, useDispatch } from 'react-redux'
const App = () => {
  const count = useSelector((state) => state.myCounter.value)
  const dispatch = useDispatch()
  return (
    <>
      <h1>Welcome to my App</h1>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
      
      <h2>Count value: {count}</h2>
      <h2>Redux is working!</h2>
    </>
  )
}

export default App