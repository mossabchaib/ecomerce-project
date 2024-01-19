import React from 'react'
import Modal from './Modal'
import { fetchClientinformationandcard } from '@/utile/action/feetchData';
export default async function page({searchParams}:any) {
  const q:any = searchParams?.q || "";
  const data:any=await fetchClientinformationandcard(q);

  return (
    <div  style={{margin:'10px 30px'}}>
        <Modal data={data}/>
    </div>
  )
}
