'use client'
import Table from './Table';
import Form from 'react-bootstrap/Form';
import React from 'react'
import style from '../add_product/style.module.css'
import { useState } from 'react';
import Link from 'next/link';
import Add_New_Admin from './add_New_Admin'
import Table_Admin from './Table_Admin'
import { addUser } from '@/utile/action/dataaction';
import Swal from 'sweetalert2';
export default function Modal(data:any) {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [job, setJob]= useState("user");
  const [isActive, setIsActive] = useState(true);
  const [category_interiser, setcategory_interiser] = useState([]);
  const [allData, setAllData]=useState({firstName:firstName,lastName:lastName,email:email,password:password,job,isActive,category_interiser:category_interiser})
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleSubmit = async (
  ) => {
    if (!firstName||!lastName|| !email || !password) {
      alert("All fields are necessary.");
            return;
          }
      allData.firstName=firstName;
      allData.lastName=lastName;
      allData.email=email;
      allData.password=password;
     
      addUser(allData);
      Swal.fire({
        title: "creat user success!!",
        text: "You clicked the button!",
        icon: "success"
      });
      toggleSidebar();
      }
  return (
    <div >
          <div className='flex justify-between px-10 pt-4'>
        <h2 style={{fontSize:'25px'}}>Dashboard</h2>
        <p>Welcome page user</p>
    </div>
    <div style={{display:'flex'}}>
   
      <button className={style.submit1} onClick={toggleSidebar}>+ add user</button>
     <Add_New_Admin/>
     </div>
 
      <div className={`${isOpen ? style.ul2 : style.ul2none}`}>
         <form className={style.form}>
          <span onClick={toggleSidebar}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg></span>
       <p className={style.form_title}>Creete user</p>
        <div className={style.input_container}>
          <input placeholder="Enter First name" type="text" onChange={(e) => setfirstName(e.target.value)}/>  
          <input placeholder="Enter laste name" type="text" onChange={(e) => setlastName(e.target.value)}/>
          <input placeholder="Enter Email" type="Email" onChange={(e) => setEmail(e.target.value)}/>  
          <input placeholder="Enter password" type="password"  onChange={(e) => setPassword(e.target.value)}/>
        </div>
    
         <button className={style.submit} type="submit" onClick={handleSubmit}>
    Creete new user
      </button>

   </form>
   </div>
 
    </div>
  )
}

  
