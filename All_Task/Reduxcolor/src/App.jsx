import React from 'react'
import {bgcolorChange } from './colorSlice'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const myclr = useSelector((state) => state.mycolor.color);
  const dispatch = useDispatch()

  return (
    <div className="container mt-5 text-center">
      <h1> Color change </h1>
      <div className="mt-4">
        <button 
          className="btn btn-primary me-2" 
          onClick={() => {dispatch(bgcolorChange())}}>Click!
        </button>
        
      </div>
      <div style={{ width:"200px", height:"200px", backgroundColor: myclr }}>

      </div>
    </div>
  )
}

export default App