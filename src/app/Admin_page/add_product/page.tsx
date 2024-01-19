
import React from 'react'
import Table from './Table';
import Ui from './Ui'
import { fetchCategory, fetchProduct } from '@/utile/action/feetchData';
export default async function page({searchParams}:any) {
  const q:any = searchParams?.q || "";
  const data:any=await fetchProduct(q);
  const categorys:any=await fetchCategory()
  return (
    <div style={{margin:'10px 30px'}}>
    <Ui categorys={categorys}/>
    < Table data={data}/>
    </div>
  )
}
