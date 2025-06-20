import React from 'react'
import { bgcolorChange  } from './coloSlice'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const cnt = useSelector((state) => state.mycounter.count)
  const dispatch = useDispatch()

  return (
    <div className="container mt-5 text-center">
      <h1>Redux Counter App</h1>
      <div className="mt-4">
        <button 
          className="btn btn-primary me-2" 
          onClick={() => {dispatch(Increment())}}>Increment
        </button>
        <button 
          className="btn btn-danger" 
          onClick={() => {dispatch(Decrement())}}
        >
          Decrement
        </button>
      </div>
      <h2 className="mt-3">Count: {cnt}</h2>
    </div>
  )
}

export default App