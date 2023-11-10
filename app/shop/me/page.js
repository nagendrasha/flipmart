'use client'
import React, { useState } from 'react'

const Me = () => {

  const student = [
    {name:'kapil bhai',isActive:false,age:29},
    {name:'Rahul Bhai',isActive:true,age:39},
    {name:'Nagendra bhai',isActive:false,age:20}

  ]

  const [newdata,setNewdata] = useState(student)

  const changeData = () =>{
    student.map((ele)=>{
      
    })
    
  }

  const button = () => {
    alert('hello');
  }
   console.log(newdata);


 



  // setNewdata()
  return (
    <>
    <h1>Data</h1>
    {/* <button onClick={button}> click me</button> */}
    {/* <button onClick={()=>{alert('hello again')}}>Click Again</button> */}
    {/* {
      student.map((ele)=>{
        return <h1>name: {ele.name} age: {ele.age}</h1>

      })
    } */}

    </>
  )
}

export default Me
