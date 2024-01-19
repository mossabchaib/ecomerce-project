
import React from 'react'
import Ui_Edit from './Ui_Edit'
import soupage from './soupage'
import { fetchCategory, fetchProduct } from '@/utile/action/feetchData';

export default async function page() {
  const data:any=await fetchProduct('');
  const categorys:any=await fetchCategory()

  return (
    <div >
      <Ui_Edit data={data} categorys={categorys}/>
    </div>
  )
}
