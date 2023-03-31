import React from 'react'
import Saaa from './Saaa'

const prince=[
    {
    id:'e1', name:'prince',age:17
 },
 {
     id:'e2', name:'rahul',age:28
 },
 {
     id:'e3', name:'mukesh',age:40
 },
 {
     id:'e4', name:'ram',age:60
 },
 {
     id:'e5',name:'naveen',age:45
 },]
const Sa = () => {
    const list=prince.map((pk)=>(
        <Saaa
        key={pk.id}
        name={pk.name}
        age={pk.age}
        />
    ))
   
  return (
    <div>{list}
      
    </div>
  )
}

export default Sa
