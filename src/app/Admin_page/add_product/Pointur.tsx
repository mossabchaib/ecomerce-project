'use client'
import { pushpointure } from '@/Golobal-Redux/all_data_product/pointurSlice';
import { useAppDispatch } from '@/Golobal-Redux/hooks';
import React, { useState } from 'react'


export default function Color(ncolor:any) {
const array=[];
for (let index = 0; index <ncolor.ncolor ; index++) {
   array[index]="hi"
    
}
const dispatch=useAppDispatch()

const array1:any=[]
const[ pointur,setpointure]=useState('')
const [ number,setnumber]=useState(ncolor)
const [ total,settotal]=useState([{}])
const n=Number(ncolor.ncolor)
const[ conter,setconter]=useState(1)
const handel=()=>{

  setconter(conter+1);
total.push({pointur:pointur,number:number})
if(conter==n) dispatch(pushpointure(total))
}

  return (
    <div>
{
    array.map((product)=>
    <form action={handel} style={{display:"flex"}} >
        <input style={{width:"120px"}} placeholder='pointur' type="text" onChange={(e)=>setpointure(e.target.value)}/>
        <input style={{width:"120px"}} placeholder='number' type="number" onChange={(e)=>setnumber(e.target.value)} />
        <button type='button' style={{width:"60px" ,background:"blue"}}  onClick={handel}>oki</button>
    </form>
    )
    
}
    </div>
  )
}

