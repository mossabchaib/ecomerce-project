import React from 'react'
import Detelse from './Detelse'
import { fetchProduct } from '@/utile/action/feetchData';


export default async function page() {
 
  const data:any=await fetchProduct('');
  return (
    <div>
      <Detelse data={data}/>
    </div>
  )
}
