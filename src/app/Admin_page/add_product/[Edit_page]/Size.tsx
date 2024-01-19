'use client'
import { pushsize } from '@/Golobal-Redux/all_data_product/sizeSlice';
import { useAppDispatch } from '@/Golobal-Redux/hooks';
import React, { useState } from 'react'
export default function Color(ncolor:any) {
const array=[];
for (let index = 0; index <ncolor.ncolor ; index++) {
   array[index]="hi"
    
}
const dispatch=useAppDispatch()
const array1:any=[]
const[ size,setsize]=useState('')
const [ number,setnumber]=useState()
const [ total,settotal]=useState([{}])
const n=Number(ncolor.ncolor)
const[ conter,setconter]=useState(1)
const handel=()=>{
  setconter(conter+1);
  console.log("ncolor.ncolor:",conter==ncolor.ncolor,n)
total.push({size:size,number:number})
if(conter==n) dispatch(pushsize(total))
}

  return (
    <div>
{
    array.map((product)=>
    <form action={handel} style={{display:"flex"}} >
        <input style={{width:"120px"}} placeholder='size' type="text" onChange={(e)=>setsize(e.target.value)}/>
        <input style={{width:"120px"}} placeholder='number' type="number" onChange={(e)=>setnumber(e.target.value)} />
        <button type='button' style={{width:"80px" ,background:"blue",margin:"5px"}} onClick={handel}>oki</button>
    </form>
    )
    
}
    </div>
  )
}

