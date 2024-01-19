'use client'
import Link from 'next/link';
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
export default  function YourComponent  (Allcategory:any) {
  let save:any;
 save=sessionStorage.getItem("Categorys");
 if(!save)if(Allcategory.categorys!="none")if(Allcategory) sessionStorage.setItem("Categorys",JSON.stringify(Allcategory.category));
 save=sessionStorage.getItem("Categorys")
 let Allcategorys:any;
 if(save!=undefined)Allcategorys=JSON.parse(save);
  return (
     <Navbar bg="none"  >
       <Navbar.Toggle aria-controls="navbarNav" />
       <Navbar.Collapse id="navbarNav">
         <Nav>
           <NavDropdown title="Categorys" id="basic-nav-dropdown" style={{fontSize:"20px"}}>
           {
                  
                         Allcategorys && Allcategorys.map((category:any,index:any)=>(
                          <>
               <NavDropdown title={category.Global_category} drop='end' style={{marginLeft:"10px",fontSize:"17px"}}>
               {Allcategorys[index].categorys.map((categoryse:any)=>(
                <Link  href={`/category-Product/${categoryse}`}>
                 <NavDropdown.Item as={Link} href={`/category-Product/${index}_${categoryse}-${Allcategorys[index].Global_category}`}>{categoryse}</NavDropdown.Item>
                 </Link>))}
               </NavDropdown>
                {/* <NavDropdown.Divider /> */}
            </>  ))}
           </NavDropdown>
         </Nav>
       </Navbar.Collapse>
     </Navbar>
  );
};

