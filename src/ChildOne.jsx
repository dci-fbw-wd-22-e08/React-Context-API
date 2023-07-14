import React, { useContext } from 'react'
import { MyContext } from './context/context'

export default function ChildOne() {
    const {counter,setCounter} = useContext(MyContext)
  return (
    <div>ChildOne <button onClick={()=>setCounter(counter+1)} >increment</button></div>
  )
}
