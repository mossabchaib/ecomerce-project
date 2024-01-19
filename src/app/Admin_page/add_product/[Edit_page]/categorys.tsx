'use client'
import { pushCategory } from '@/Golobal-Redux/all_data_product/categorySlice';
import { pushpointure } from '@/Golobal-Redux/all_data_product/pointurSlice';
import { useAppDispatch } from '@/Golobal-Redux/hooks';
import React, { useState } from 'react'
export default function categorys(ncolor:any) {
const array=[];
for (let index = 0; index <ncolor.ncolor ; index++) {
   array[index]="hi"
    }
const dispatch=useAppDispatch()
const array1:any=[]
const[ category,setCattegory]=useState('')
const [ total,settotal]=useState([{}])
const n=Number(ncolor.ncolor)
const[ conter,setconter]=useState(1)
const handel=()=>{
 setconter(conter+1);
total.push(category)
if(conter==n) dispatch(pushCategory(total));
}
 return (
    <div>
{
    array.map((product)=>
    <form action={handel} style={{display:"flex"}} >
        <input  placeholder='category' type="text" onChange={(e)=>setCattegory(e.target.value)}/>
        <button type='button' style={{width:"60px" ,background:"blue"}}  onClick={handel}>oki</button>
    </form>
    )
    
}
    </div>
  )
}

