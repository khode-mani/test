// import React from 'react'
// import { useStore } from 'zustand'
// // import { useStore } from 'zustand'
// import {useCountStore} from '@/zustand-store/store'


// function CounterZustand() {

// // /  const { count, inc } = useStore()
//  const mrw = useCountStore()

//   // const count = useStore(sta)
//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={inc}>one up</button>
//     </div>
//   )

// }

// export default CounterZustand


'use client'

import { useCounterStore } from "@/zustand-store/store"
import CounterNumZustand from "./CounterNumZustand"

// import { useCounterStore } from '../store/counterStore'

export function CounterZustand() {
  const { value, increment, decrement } = useCounterStore()



  return (
    <div className="flex items-center gap-4 select-none">
      
      <div className="flex gap-2">


        <button
          onClick={decrement}
          className="h-15 w-15 bg-red-500 text-white rounded"
        >
          -
        </button>
        
        
        <CounterNumZustand/>
        
        <button
          onClick={increment}
          className="h-15 w-15 bg-green-500 text-white rounded"
        >
          +
        </button>


      </div>
    </div>
  )
}
