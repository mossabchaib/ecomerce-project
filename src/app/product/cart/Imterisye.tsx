'use client'
import React from 'react'
import StyleP from './StyleP.module.css'
import Link from 'next/link'
import { useAppDispatch } from '@/Golobal-Redux/hooks'
import { addId } from '@/Golobal-Redux/idSlice/DataSlice'
import user_product_intersie from './user_product_intersie'
export default function Imterisye(Allcategorys:any) {
    const dispatch=useAppDispatch()
    const sendId=(id:any)=>{
        dispatch(addId(id))
         }
  
    const user_Existe:any=localStorage.getItem("user")
    const verfy:any=user_Existe&&JSON.parse(user_Existe)
    let All_data:any;
    if(verfy){
  All_data=user_product_intersie(Allcategorys.Allcategorys,verfy.category_interiser)
  console.log("All_data:",All_data)
   }
  return (
    <div>
      { 
 
 All_data&&All_data.map((product:any,index:any)=>(
        <div className={StyleP.item1}>
          <div className={StyleP.item} key={product._id} >
          <Link href={`/product/cart/${product._id}${index}`}>
              <div onClick={()=>sendId(product)}>
                <div className={StyleP.im}> 
                  <img src={product.image[0][0]||""} alt={product.image[0]||""}  />
                </div>
                 </div>
           </Link>
           </div>
           <div className={StyleP.information}>
               <h3 style={{fontSize:'15px'}}>{product.title||""}</h3>
               <p className={StyleP.p} style={{fontSize:'15px'}}>{product.price||""}$</p>
             
           </div>
           </div>
    ))}
    </div>
  )
}
