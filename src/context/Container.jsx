import React, {useState} from 'react'
import { MyContext } from './context'

export default function Container({children}) {
    const [counter,setCounter] = useState(0)
    const [products,setProducts]=useState([])
    const [categories,setCategories] = useState([])
    const [cart,setCart]= useState([])
    const [user,setUser]= useState(null)
  return (
    <MyContext.Provider value={{counter,setCounter,products,setProducts,categories,setCategories,cart,setCart,user,setUser  }}>
        {children}
    </MyContext.Provider>
  )
}
