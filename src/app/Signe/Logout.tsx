'use client'
import { useAppDispatch } from '@/Golobal-Redux/hooks';
import { addcontact } from '@/Golobal-Redux/signSlice/sign';
import { updateuser } from '@/utile/action/update';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import style from './styl.module.css'
export default function Logout(user:any) {
  const [Click, setClick] = useState(false);
  const [userData, setuser]:any = useState([]);
  const dispatch=useAppDispatch();
  const router=useRouter()
  const handleSubmit = async (e:any) => {
    if(!Click){
  e.isActive=false;
 await updateuser(e._id,e);
 localStorage.removeItem("user");
router.replace("/Login");}
setClick(true);
}
   useEffect(()=>{
    const save:any=localStorage.getItem("user");
  setuser(JSON.parse(save))
},[])  
  return (
    <div>
     <div className={ style.ul1}>


 <form className={style.form} key={userData._id}>
  
 <p className={style.form_title}>welcom {userData.firstName}</p>
 <br />
  <div className={style.input_container} >
   <h3>first name: {userData.firstName}</h3>
   <br />
   <h3>laste name: {userData.lastName}</h3>
   <br />
   <h3>email : {userData.email} </h3>
   <br />
  
   <button className={style.submit} type="button" onClick={()=>handleSubmit(userData)}>
   {!Click?<div>Logout</div>: <div>Loading...</div>}
     </button>
 </div>
 </form>

  </div>
    </div>
  )
}
