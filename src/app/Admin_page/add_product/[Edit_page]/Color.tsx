'use client'
import Style from '../style.module.css'
import Colorsp from './colorsp'
import { useAppDispatch, useAppSelector } from '@/Golobal-Redux/hooks';
import React, { useState } from 'react'
  import { pushColor } from '@/Golobal-Redux/all_data_product/colorSlice';
import { RootState } from '@/Golobal-Redux/Store';
export default function Color(ncolor:any) {
  const array=[];
  for (let index = 0; index <ncolor.ncolor ; index++) {
     array[index]="hi"
      
  }
  const colorsp=useAppSelector((clsp:RootState)=>clsp.clsp)
  const dispatch=useAppDispatch()
  const[ color,setcolor]=useState('')
  const [ number,setnumber]=useState(ncolor)
  const [numbersize_pointure,setnumbersize_pointure]=useState(ncolor)
  const [ total,settotal]=useState([{}])
  const n=Number(ncolor.ncolor)
  const[ conter,setconter]=useState(1)
  const[ conter1,setconter1]=useState(0)
  const array1:any=[];
  const handel=()=>{
    setconter1(conter1+1);
    setconter(conter+1);
  total.push({color:color,number:number,colorsp:colorsp})
  if(conter==n){
    dispatch(pushColor(total))}
  }
  return (
    <div>
    {
        array.map((product)=>
        <form style={{display:"flex"}}>
            <input style={{width:"120px"}} placeholder='color' type="text" onChange={(e)=>setcolor(e.target.value)}/>
            <input style={{width:"120px"}} placeholder='number' type="number" onChange={(e)=>setnumber(e.target.value)}/>
            <input style={{width:"120px"}} placeholder='number size/pointure' type="number" onChange={(e)=>setnumbersize_pointure(e.target.value)}/>
            </form>)}
    <div>
    <div>
      <Colorsp ncolor={numbersize_pointure}/>
    </div>
     <button type='button' className={`${conter1==n?Style.finish:Style.nofinish}`} style={{width:"60px" ,height:"40px",borderRadius:"10px"}}  onClick={handel}>{conter1==n?<>finish</>:<>oki</>}</button>
    
    </div>
      
    
        </div>
  )
}

