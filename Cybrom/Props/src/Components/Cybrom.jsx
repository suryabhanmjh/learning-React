import React from 'react'

const Cybrom = (props) => {
  return (
    <>
    {/* <h2>My Name : {props.name}</h2>
    <h2>My City : {props.city}</h2>
    <h2>My Age : {props.age}</h2>
    <h2>My Country : {props.country}</h2> */}

    <h1 align="center">Cybrom Student Details</h1>
    <h2>Students Name : {props.nm}</h2>
    <h2>Students Subject : {props.sub}</h2>
    <h2>Students Address : {props.add}</h2>
    <h2>Students Fees : {props.fees}</h2>
    <h2>Students Contact : {props.contact}</h2>
    </>
  )
}

export default Cybrom