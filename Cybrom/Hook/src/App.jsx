// import {useState} from "react";
// const App=()=>{
//   const [color,setColor]=useState("red")
//   return(
//     <>
//     <h1>Welcome to react App </h1>
//     <button style={{backgroundColor:"yellow"}} onClick={()=>{setColor("yellow")}}>Yellow</button>
//     <button style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>blue</button>
//     <button style={{backgroundColor:"green"}} onClick={()=>{setColor("green")}}>green</button>


//     <h2 style={{color:color}}>My Favorite Color :{color}</h2>
//     </>
//   )
// }
// export default App;


// import React from 'react'
// import { useState } from "react";
// const App=()=>{

//   const [count,setCount]=useState(0);

//   const myinc=()=>{
//     setCount(count+1)
//   }
//   const mydecre=()=>{
//     if(count==0)
//     {
//       alert("No Dec")
//     }
//     else{

//           setCount(count-1)

//     }
//   }
//   return (
//     <>
//     <h1>Couter App</h1>
//     <button onClick={myinc}>Increment</button>

//     <h1>{count}</h1>
//     <button onClick={mydecre}>Decrement</button>
//     </>
//   )
// }
// export default App;


// import React from 'react'
// import { useState, useEffect } from "react";
// const App=()=>{

// const [myval, setMyval]=useState(0);

//   useEffect=(()=>{
//     setTimeout(()=>{
//       setMyval(myval+1);
//     }, 5000)
    
//   });
  
//   return (
//     <>
//     <h1>Welcome {myval}</h1>
//     </>
//   )
// }
// export default App;

import { useEffect, useState } from "react";

const App=()=>{

  const [count,setCount]=useState(0);
  const [multi,setMulti]=useState(0);

  useEffect(()=>{
    setMulti(count*2);
  })
  return(
    <>
<h1>welcome my app</h1>
<button onClick={()=>{setCount(count+1)}}>click</button>
<h1>my count :{count}</h1>
<h1 >multipilication:{multi}</h1>
    </>
  )
} 

export default App;