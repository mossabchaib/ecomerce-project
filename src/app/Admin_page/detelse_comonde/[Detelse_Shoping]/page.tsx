import React from 'react'
import Detelse from './Detelse'
import { fetchClientinformationandcard } from '@/utile/action/feetchData';
import Card from './Card';
export default async function IdProduct() {
  const data:any=await fetchClientinformationandcard('');
  return (
    <div className='bg-gray-100'>
      <div><Card data={data}/></div>
      <div><Detelse data={data}/></div>
    </div>
  )
}
