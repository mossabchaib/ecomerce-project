'use client'
import StyleP from '../../carousel/car.module.css'
import Link from 'next/link'
import {Path} from './Path'
import  handal_Category  from './handal_category'
import { useAppDispatch, useAppSelector } from '@/Golobal-Redux/hooks'
import { pushAll } from '@/Golobal-Redux/allProduct/AllSlice'
import { RootState } from '@/Golobal-Redux/Store'
import { useEffect, useState } from 'react'
import { addId } from '@/Golobal-Redux/idSlice/DataSlice'
let product:any=''
export default  function CategoryChoice() {
  let save:any;
  save=sessionStorage.getItem("All_products");
  let Allcategorys:any;
  Allcategorys=JSON.parse(save);
   const pathName=Path(2)
   const [datac,setDatac]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      const product = await handal_Category(pathName, Allcategorys);
      setDatac(product);
    };
  
    fetchData();
  }, [pathName]);
  const dispatch=useAppDispatch()
  const sendId=(id:any)=>{
    dispatch(addId(id))
      }
  return (
    <div>
       <div className={StyleP.cart}>
   {
 datac&&datac.map((data:any,index:any)=> (  
    <div className={StyleP.item1}>
       <div className={StyleP.item} key={data.id} >
       <Link href={`/product/cart/${data._id}${index}`}>
           <div onClick={()=>sendId(product)}>
             <div className={StyleP.im}> 
               <img src={data.image[0][0]} alt={data.image} />
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
