import React from 'react'
import StyleP from '../../carousel/car.module.css'
import Link from 'next/link';
export default function Cattegory_smale(product:any) {
    console.log("product:",product);
  return (
    <div>
       <div className={StyleP.cart}>
   {
 product&&product.map((data:any)=> (  
    <div className={StyleP.item1}>
       <div className={StyleP.item} key={data.id} >
       <Link href={`/product/cart/${data._id}`}>
           <div >
             <div className={StyleP.im}> 
               <img src={data.image} alt={data.image} />
             </div>
    
       </div>
        </Link>
        </div>

        <div className={StyleP.information}>
            <h3 style={{fontSize:'15px'}}>{data.title.slice(0,15)}</h3>
            <p className={StyleP.p}>{data.price}$</p>
            </div>
       
            </div>)
   )}
</div> 
    </div>
  )
}
