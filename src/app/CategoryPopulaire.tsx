'use client'
import { addId } from '@/Golobal-Redux/idSlice/DataSlice'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Image from './product/cart/Image'
import StyleP from './product/cart/StyleP.module.css'
import { useAppDispatch } from '@/Golobal-Redux/hooks'
import { pushAll } from '@/Golobal-Redux/allProduct/AllSlice'
export default  function CategoryPopulaire({data}:any) {
  const dispatch=useAppDispatch();
  const sendId=(id:any)=>{
    dispatch(addId(id))
      }
  return (
    <div>
     
     <div className={StyleP.cart}>
    {
  data.map((data:any)=>{
      
      return (
        <div className={StyleP.item1}>
        <div className={StyleP.item} key={data.id} >
        <Link href={`/product/cart/${data.id}`}>
            <div onClick={()=>sendId(data)}>
              <div className={StyleP.im}> 
                {/* <Image idimage={data.image}/> */}
                <img src={data.image} alt={data.image} style={{}} />
              </div>
     
        </div>
         </Link>
         </div>
         <div className={StyleP.information}>
             <h3 style={{fontSize:'15px'}}>{data.title.slice(0,15)}</h3>
             <p className={StyleP.p}>{data.price}$</p>
           
         </div>
         </div>
    )})}
</div>
</div>

  )
}
