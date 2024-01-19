'use client'
import React from 'react'
import { useAppDispatch,useAppSelector } from '@/Golobal-Redux/hooks'
import style from './style.module.css'
import Link from 'next/link'
import Swal from 'sweetalert2'
import { Cart } from '@/utile/action/handal'
import { add } from '@/Golobal-Redux/buySlice/buy'
import { pushAll } from '@/Golobal-Redux/allProduct/AllSlice'
let data_cart:any=[];
export default function Add(id:any) {
const dispatch=useAppDispatch()
  const buy=async(product:any)=>{
    console.log("product.id.:",product.id,product.id[0].color)
    if(product.id[0].color.length!=0 &&product.color=="" ){
      Swal.fire("you dont choice color!");
      return;
    }
    if(product.id[0].pointure.length!=0 &&product.Pointure=="" ){
      Swal.fire("you dont choice pointur!");
      return;
    }
    if(product.id[0].size.length!=0 &&product.Size=="" ){
      Swal.fire("you dont choice size!");
      return;
    }
 dispatch(add(""));
dispatch(pushAll(product));
  }

  return (
    <div>
         <Link href=""><button className={style.buybutton} onClick={()=>buy(id)}>Add to Cart</button></Link>
      
    </div>
  )
}
