"use client"
;
import React, { useState } from 'react'
import StyleP from '../../../product/cart/StyleP.module.css'
import { usePathname } from 'next/navigation';
export default function Card(product:any) {
    const path=usePathname()
    const index:any=path[path.length-1];
    Number(index)
    console.log(product.data.Cardfeetch[index].card[0].id.image[0] ,index)
  return (

    <div className={StyleP.containar} >


    <div className={StyleP.cart} style={{paddingTop:"60px"}}>
 
        <div className={StyleP.item1} style={{height:"fit-content"}}>
          <div className={StyleP.item} key={product._id} >
              <div >
                <div className={StyleP.im}> 
                  <img src={product.data.Cardfeetch[index]&&product.data.Cardfeetch[index].card[0].id.image[0][0] ||""} alt={""}  />
                </div>
          </div>
         
           </div>
           <div className={StyleP.information} style={{paddingLeft:"30px"}}>
               <h3 style={{fontSize:'20px'}}>{product.data.Cardfeetch[index].card[0].id.title||""}</h3>
               <p className={StyleP.p} style={{fontSize:'20px'}}>{product.data.Cardfeetch[index].card[0].id.price||""}$</p>
               <h3 style={{fontSize:'17px'}}>color:  {product.data.Cardfeetch[index].card[0].color||""}</h3>
               <h3 style={{fontSize:'17px'}}>size:  {product.data.Cardfeetch[index].card[0].Size||""}</h3>
               <h3 style={{fontSize:'17px'}}>pointer:  { product.data.Cardfeetch[index].card[0].Pointure||""}</h3>
               <h3 style={{fontSize:'17px'}}>quantite:  {product.data.Cardfeetch[index].card[0].quantite||""}</h3>
           </div>
           </div>

</div>
</div>
  )
}
