'use client'
import React from 'react'
import { Path } from './Path';
import StyleP from '../../product/cart/StyleP.module.css'
import Link from 'next/link';
import Image from '../../product/cart/Image'
import { useAppDispatch } from '@/Golobal-Redux/hooks';
import { addId } from '@/Golobal-Redux/idSlice/DataSlice';
export default function All_Global_category() {
    const pathName=Path(3);
    console.log(pathName)
    let save:any;
  save=sessionStorage.getItem("All_products");
  let Allcategorys:any;
  Allcategorys=JSON.parse(save);
  const dispatch=useAppDispatch()
  const sendId=(id:any)=>{
    dispatch(addId(id))
      }
  return (
    <div className={StyleP.containar}>

    <div className={StyleP.cart} >
 { 
  Allcategorys&& Allcategorys.map((product:any,index:any)=>{
    if(pathName==product.Global_category){
     return  ( <div className={StyleP.item1}>
          <div className={StyleP.item} key={product._id} >
          <Link href={`/product/cart/${product._id}${index}`}>
              <div onClick={()=>sendId(product)}>
                <div className={StyleP.im}> 
                  <img src={product.image[0][0]||""} alt={product.image[0]||""} style={{}} />
                </div>
       
          </div>
           </Link>
           </div>
           <div className={StyleP.information}>
               <h3 style={{fontSize:'15px'}}>{product.title||""}</h3>
               <p className={StyleP.p} style={{fontSize:'15px'}}>{product.price||""}$</p>
             
           </div>
           </div>)}
})}
</div>
</div>
  )
}
