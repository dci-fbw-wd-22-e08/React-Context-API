import React, { useContext } from 'react'
import { MyContext } from './context/context'

export default function ChildTwo() {
   const {counter} =  useContext(MyContext)
  
  return (
    <div>ChildTwo :here is counter value = {counter} </div>
  )
}
