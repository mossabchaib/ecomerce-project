'use client'
import { useAppDispatch } from '@/Golobal-Redux/hooks';
import style from './style.module.css'
import React from 'react'
export default function onclck(product:any) {
    const dispatch = useAppDispatch();

   
  return (
    
        <div >
        <button className={style.clearbtn} type="button" >
          Clear
        </button>
   </div>
  )
}
