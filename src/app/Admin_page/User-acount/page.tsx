import Table from './Table';
import Table_Admin from './Table_Admin'
import React from 'react'
import Modal from './Modal'
import { fetchUsers } from '@/utile/action/feetchData';
export default async function page({searchParams}:any) {
 const q:any = searchParams?.q || "";
 const data=await fetchUsers(q);
 console.log("users:==============================================================================================================================================",data)

  return (
    <div style={{margin:'10px 30px'}}>
    <Modal />
    <Table_Admin data={data}/>
   < Table data={data}/> 
  </div>
  )
}
