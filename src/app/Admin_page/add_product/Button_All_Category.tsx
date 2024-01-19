 'use client'
 import { removecategory } from '@/utile/action/dataaction';
 import Swal from 'sweetalert2';
import React, { useState } from 'react';
 import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
 const YourComponent = (Allcategory:any) => {
  const [id,setid]=useState()
  const handle=async()=>{
   await removecategory(id);
   Swal.fire({
    title: "remove category  success!",
    text: "You clicked the button!",
    icon: "success"
  });
  }
   return (
     <Navbar bg="none"  style={{marginLeft:"50px",marginTop:"30px"}}>
       <Navbar.Toggle aria-controls="navbarNav" />
       <Navbar.Collapse id="navbarNav">
         <Nav>
           <NavDropdown title="Categorys" id="basic-nav-dropdown" style={{fontSize:"20px"}}>
           {
                   
                         Allcategory.category && Allcategory.category.map((category:any,index:any)=>(
                          <>
               <NavDropdown title={category.Global_category} drop='end' style={{marginLeft:"10px",fontSize:"17px"}}>
               {Allcategory.category[index].categorys.map((categoryse:any)=>(
                <>
                 <NavDropdown.Item href="#category">{categoryse}</NavDropdown.Item>
                 </>))}
               </NavDropdown>
               <div style={{marginLeft:"10px"}} onClick={()=>{setid(category._id);handle()}}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="#000"fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></div>
              
                 <NavDropdown.Divider /> 
            </>  ))}
           </NavDropdown>
         </Nav>
       </Navbar.Collapse>
     </Navbar>
   );
 };

 export default YourComponent;
