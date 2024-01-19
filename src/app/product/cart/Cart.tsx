'use client'
import { useAppDispatch } from '@/Golobal-Redux/hooks'
import React from 'react'
import StyleP from './StyleP.module.css'
import Input from '../../../components/Input'
import Link from 'next/link'
import { addId } from '@/Golobal-Redux/idSlice/DataSlice'
import Imterisye from './Imterisye'
export default function Cart(product: any) {
 const dispatch=useAppDispatch()
const sendId=(id:any)=>{
  console.log("id_product:",id)
    dispatch(addId(id))
     }
     let save:any;
     save=sessionStorage.getItem("All_products");
     if(!save) if(product&&product.length!=0) sessionStorage.setItem("All_products",JSON.stringify(product));
     save=sessionStorage.getItem("All_products")
     let Allcategorys:any;
     if(save){Allcategorys=JSON.parse(save);}
    
    console.log("Allcategorys:",Allcategorys);
    const lengh:any=sessionStorage.getItem("lengh:")
    const verfication_de_searsh:any=sessionStorage.getItem("lengh:");
    if(!verfication_de_searsh)sessionStorage.setItem("lengh:",product&&product.data.length)
    console.log("lengh==product.data.length:",lengh==product.data.length,lengh,product.data.length);
  return (
 <div className={StyleP.containar}>
    <div className={StyleP.Searsh}><Input/></div>
   
{lengh==product.data.length?
    <div className={StyleP.cart} >
       <Imterisye Allcategorys={Allcategorys}/>
 { 
 
 Allcategorys&&Allcategorys.map((product:any,index:any)=>(
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
</div>:<div>
  {
     
 
      product.data&& product.data.map((product:any,index:any)=>(
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
                   <h3 style={{fontSize:'20px'}}>{product.title||""}</h3>
                   <p className={StyleP.p} style={{fontSize:'20px'}}>{product.price||""}$</p>
                 
               </div>
               </div>
        ))}
  </div>}
</div>
  )
}

// const dispatch=useAppDispatch()
//   const sendId=(id:any)=>{
//     console.log("id_product:",id)
//       dispatch(addId(id))
//        }
//        let save:any;
//        save=sessionStorage.getItem("All_products");
//        if(!save) if(product&&product.length!=0) sessionStorage.setItem("All_products",JSON.stringify(product));
//        save=sessionStorage.getItem("All_products")
//        let Allcategorys:any;
//        if(save){Allcategorys=JSON.parse(save);sessionStorage.setItem("lengh:",product&&product.data.length)}
//       const user_Existe:any=localStorage.getItem("user")
//       if(user_Existe&&user_Existe.category_interiser){
//         console.log("hih",product.length);
//       }
//       console.log("product.length:",product.data.length);
//       const lengh:any=sessionStorage.getItem("lengh:");
//       console.log("lengh!=product.data.length:",lengh!=product.data.length,lengh,product.data.length)
//       if(  lengh!=product.data.length){
//         console.log("lengh!=product.data.length:",lengh!=product.data.length,lengh,product.data.length)
//         Allcategorys=product.data;
//       }
//       console.log("Allcategorys:",Allcategorys)