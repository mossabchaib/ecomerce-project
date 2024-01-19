'use client'
import { pushimage } from '@/Golobal-Redux/all_data_product/ImageSlice';
import { useAppDispatch } from '@/Golobal-Redux/hooks';
import React, { useState } from 'react'


export default function Color(ncolor:any) {
const array=[];
for (let index = 0; index <ncolor.ncolor ; index++) {
   array[index]="hi" 
}
const dispatch=useAppDispatch()
const [image,setimage]:any=useState([])
const n=Number(ncolor.ncolor)
const[ conter,setconter]=useState(1)
const handle=(e:any)=>{
  setconter(conter+1);
image.push(e)
if(conter==n) dispatch(pushimage(image))
}
  return (
    <div>
{
    array.map((product)=>
    <div >
        <input placeholder='image' type="text" onChange={(e)=>handle(e.target.value)} />
       
    </div>
    )
    
}
    </div>
  )
}

