'use client'
import { useState } from 'react'
import React from 'react'
import styled from './style.module.css'
import {Path} from './Path'
import Link from 'next/link'
export default function Category() {
const Global_Category:any=Path(3);
const index:any=Path(1);
const smale_Category:any=Path(2);
let save:any;
save=sessionStorage.getItem("All_products");
let Allcategorys:any;
Allcategorys=JSON.parse(save);
 Allcategorys[index].category[0].splice(0,1);
  return (
   
     <div>
  
     <div className={styled.continer}>
    
       {
       Allcategorys &&
       Allcategorys[index].category[0].map((item:any)=>
      
    
 
            <div className={styled.continer2} key={item} >
           <Link href={`/category-Product/${index}_${item}-${Global_Category}`}>
              <h5 className={`${smale_Category==item?styled.p1:styled.p}`}>{item}</h5></Link>
             </div>
       
    )}
        
        
    
     </div>
     <h1 className={styled.h1}>{Global_Category}</h1>
   
     </div>
  )
}
