"use client"



import { useAppDispatch, useAppSelector } from '@/hooks/reduxHook'
import React from 'react'

// import { useAppSelector, useAppDispatch } from 'app/hooks'

import { decrement, increment } from '../../redux-store/counterSlice'
import CounterNum from './CounterNumRedux'

export default function CounterRedux() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  // omit rendering logic

  return (
    <div className='text-center h-full w-fit flex mx-auto'>
        <button
            className='h-full px-5 bg-blue-700'
            onClick={()=> dispatch(decrement())}
        >
            -
        </button>

        <CounterNum/>
        
        <button
            className='h-full px-5 bg-blue-700'
            onClick={()=> dispatch(increment())}
        >
            +
        </button>


    </div>
  );
}