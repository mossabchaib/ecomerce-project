
import { useAppDispatch } from '@/Golobal-Redux/hooks'
import { addId } from '@/Golobal-Redux/idSlice/DataSlice'
import Link from 'next/link'
import React, { useState } from 'react'
import StyleP from '../../../carousel/car.module.css'
import Image from '../Image'
import  category_maybe_liket  from './Category'
let dataAll:any='';
export default function Categoryy(data:any) {
const category=data.Category;
    const dispatch=useAppDispatch()
    const sendId=(id:any)=>{
      dispatch(addId(id))
        }
        const handal= () => {
          dataAll= category_maybe_liket(data,data.Category)
          
        }
    handal();
        return (
          <div>
           
          <div className={StyleP.cart}>
         {
   dataAll&&    dataAll.map((product:any,index:any)=> 
          <div className={StyleP.item1}>
             <div className={StyleP.item} key={product._id} >
             <Link href={`/product/cart/${product._id}${index}`}>
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
             
                  </div>
         )}
      </div>
      </div>
         )
}
