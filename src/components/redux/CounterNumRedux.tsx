import { useAppSelector } from '@/hooks/reduxHook'
import React from 'react'

function CounterNum() {
  const count = useAppSelector(state=> state.counter.value)
  return (
    <div className='text-4xl'>{count}</div>
  )
}

export default CounterNum