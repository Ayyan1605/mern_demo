import React from 'react'

const Student = (props) => {
  return (
    <div>
      <h1>This is a Student Page</h1>
      <h2>Student Name : {props.name}</h2>
      <h2>Student Course : {props.course}</h2>
      <h2>Student Age: {props.age}</h2>
    </div>
  )
}

export default Student