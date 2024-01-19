import { pushColor } from '@/Golobal-Redux/all_data_product/clspSlice';
import { useAppDispatch } from '@/Golobal-Redux/hooks';
import React, { useState } from 'react'

export default function colorsp(ncolor:any) {
    const n=Number(ncolor.ncolor)

    const array:any=[];
for (let index = 0; index <n ; index++) {
   array[index]=index
    }
    const array2=[]
    array2.push(array)
    const[ colorsp,setcolorsp]=useState('')
const [ numbersp,setnumbersp]=useState(ncolor)
const [ total,settotal]=useState([{}])
let[ conter,setconter]=useState(0)
const handel=()=>{
  conter=conter+1;
  setconter(conter)
    total.push({colorsp:colorsp,numbersp:numbersp})
  if(conter==n) {
    conter=0;
    setconter(conter);
  localStorage.setItem("cloreSP",JSON.stringify(total));
  total.splice(0,total.length);
  }
  }
  return (
    <div>
      {array2&&array2[0].map((product:any)=>
<form >
   <input style={{width:"120px"}} placeholder='color s/p' type="text" onChange={(e)=>setcolorsp(e.target.value)}/>
   <input style={{width:"120px"}} placeholder='number s/p' type="number" onChange={(e)=>setnumbersp(e.target.value)}/>
   <button type='button' style={{width:"60px" ,background:"blue",height:"40px",borderRadius:"10px"}}  onClick={handel}>oki</button>
   </form>
)}
    </div>
  )
}
