"use client"
import Form from 'react-bootstrap/Form'
import style from '../../add_product/style.module.css'
 import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { updateinformation_shopinig_client } from '@/utile/action/update'
export default function Detelse(data:any) {
  const [recent,setrecent]=useState('');
  const [send,setsend]=useState('')
   const path=usePathname()
   const index:any=path[path.length-1];
   const handleSubmit = async (e:any) => {
    e.preventDefault();
    await updateinformation_shopinig_client(data.data.Cardfeetch[index]._id,send,recent)
    Swal.fire({
      title: "update success!",
      text: "You clicked the button!",
      icon: "success"
    });
   }
   
  return (
    <div className={ style.ul1}>
    <form className={style.form}>
  
  <p className={style.form_title}>information your client</p>
  <br />
   <div className={style.input_container} >
    <h3>first name: {data.data.Cardfeetch[index].firstName}</h3>
    <br />
    <h3>laste name: {data.data.Cardfeetch[index].lastName}</h3>
    <br />
    <h3>email : {data.data.Cardfeetch[index].email}</h3>
    <br />
    <h3>numiro: {data.data.Cardfeetch[index].numiro_client}</h3>
    <br />
    <h3>adress: {data.data.Cardfeetch[index].Address}</h3>
    <br />
    <h3>state: {data.data.Cardfeetch[index].State}</h3>
    <br />
    <h3>contry: {data.data.Cardfeetch[index].city}</h3>
    <br />
    <h3>price Totale: {data.data.Cardfeetch[index].priceTotle}$</h3>
    <br />
    <Form.Select aria-label="Default select example" style={{width:'300px'}} onChange={(e) => setrecent(e.target.value)}>
      <option> Recent Orders?</option>
      <option value='yes'>yes</option>
<option value='I dont know'>I dont know</option>
    </Form.Select>
    <br />
    <Form.Select aria-label="Default select example" style={{width:'300px'}} onChange={(e) => setsend(e.target.value)}>
      <option>send order?</option>
    
      <option value='yes'>yes</option>
<option value='no'>no</option>
     
  
    </Form.Select>
    <button className={style.submit} type="button" onClick={handleSubmit}>
   update?
      </button>
  </div>
  </form>
  </div>
  )
}
