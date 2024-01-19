 'use client'
 import Link from 'next/link'
 import { addId } from '@/Golobal-Redux/idSlice/DataSlice'
 import React, { useEffect } from 'react'
 import Image from '../product/cart/Image'
 import StyleP from './car.module.css'
 import { useAppDispatch } from '@/Golobal-Redux/hooks'
 import { pushAll } from '@/Golobal-Redux/allProduct/AllSlice'
 export default  function CategoryPopulaire(data:any) {
  const dispatch=useAppDispatch();
  let save:any;
  save=sessionStorage.getItem("All_products");
  if(!save) if(data.length!=0) sessionStorage.setItem("All_products",JSON.stringify(data));
  save=sessionStorage.getItem("All_products")
  let Allcategorys:any;
  if(save)Allcategorys=JSON.parse(save);
  const sendId=(id:any)=>{
    dispatch(addId(id))
      }
console.log("data:",data);
   return (
    <div>
     
    <div className={StyleP.cart}>
   {
 Allcategorys&&Allcategorys.map((product:any)=>{
  if(data.category==product.Global_category )
  return( <div className={StyleP.item1}>
             <div className={StyleP.item} key={product._id} >
             <Link href={`/product/cart/${product._id}`}>
                 <div onClick={()=>sendId(product)}>
                   <div className={StyleP.im}> 
                 
                     <img src={product.image[0][0]} alt={product.image} />
                   </div>
          
             </div>
              </Link>
              </div>
      
              <div className={StyleP.information}>
                  <h3 style={{fontSize:'15px'}}>{product.title.slice(0,15)}</h3>
                  <p className={StyleP.p}>{product.price}$</p>
                  </div>
             
                  </div>)}
   )}
</div>
</div>
   )
       }
 