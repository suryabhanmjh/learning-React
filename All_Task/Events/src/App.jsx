import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

// const App = () => {
//   // function Display(){
//   //   alert("Welcome to react Events");


//   const myname=(fnm, snm)=>{
//     alert(`Hello ${fnm} ${snm}! How r u!`);
//   }
  
//   return (
//     <>
//     <h1>Welcome</h1>
//     <button onClick={()=>{myname("Suryabhan", "Singh")}}>Click here!</button>
//     </>
//   )
// }
// export default App;





import React from 'react'

// const App = () => {
//   const MyName=(nm, e)=>{
//     alert(`Myname: ${nm} Type : ${e.type}`)
//   }
//   return (
//     <>
//     <h1>Welcome to app</h1>
//     <button onClick={(e)=>{MyName("Suryabhan", e)}}>Click here!</button>

//     </>
//   )
// }

// export default App


// const App = () => {
//   const display=(e)=>{
//     let nm= e.target.name;
//     let val= e.target.value;
//     alert(`Name: ${nm} Value : ${val}`)
//   }
//   return (
//     <>
//     <h1>Welcome to app</h1>
//     <button name="MyBtn1"  value="btm" onClick={display}>Click here!</button>

//     </>
//   )
// }

// export default App


const App = () => {
  const handleInput=(e)=>{
    let name= e.target.name;
    let value= e.target.value;
  console.log({[name] : value});
  }
  return (
    <>
    Enter City : <input type='text' name='mycity' value='Bhopal' onChange={handleInput} />
    
    </>
  )
}

export default App