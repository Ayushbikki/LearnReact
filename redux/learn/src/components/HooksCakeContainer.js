import React from 'react'
import { useSelector } from 'react-redux'
import {useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
   const numOfCakes= useSelector(state => state.cake.numOfCakes)
   const dispatch = useDispatch()
  // console.log(dispatch)
  // console.log(numOfCakes);
  return (
      <div>
          <h2>Num of Cakes2 - {numOfCakes}</h2>
         <button onClick={()=>dispatch(buyCake())} className='btn btn-secondary'>Buy cake2</button>
      </div>
    
  )
}

export default HooksCakeContainer