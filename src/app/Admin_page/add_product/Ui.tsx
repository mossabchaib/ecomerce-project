'use client'
import Swal from 'sweetalert2';
import Form from 'react-bootstrap/Form';
import React from 'react'
import style from './style.module.css'
import { useState } from 'react';
import Link from 'next/link';
import Add_Category from './add_Category'
import Button_All_Category from './Button_All_Category';
import Color from './Color';
import ImageSize from './ImageSize'
import Pointur from './Pointur'
import Size from './Size'
import { useAppSelector } from '@/Golobal-Redux/hooks';
import type { RootState } from '../../../Golobal-Redux/Store'
import { addproduct } from '@/utile/action/dataaction';
import { updateCategory } from '@/utile/action/update';
import Category from './categorys'
export default function Modal(categorys:any) {

  const [nCategorys,setnCategorys]=useState(categorys);
  const [isOpen, setIsOpen] = useState(false);
  const [title,setTitel]=useState('');
  const [price,setprice]=useState('');
  const [description,setdescription]=useState('');
  const [nimage,setnimage]=useState(categorys);
  const [Stock,setStock]=useState('');
  const [ncolor,setncolor]=useState(categorys);
  const [pointure,setpointure]=useState(categorys)
  const [colorproduc,setcolorproduc]=useState(categorys)
  const [sizeproduc,setsizeproduc]=useState([])
  const [pointureproduc,setpointureproduc]=useState([])
  const [imageproduc,setimageproduc]=useState([])
  const [size,setSize]=useState(categorys)
  const [Global_category,setGlobal_category]=useState('')
  const [allData, setAllData]=useState({title:title,price:price,Global_category:Global_category,description:description,Stock:Stock})
   
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const colorproduce:any=useAppSelector((color:any)=>color.color.notes);
const sizeproduce:any=useAppSelector((size:any)=>size.size.notes);
const pointureproduce:any=useAppSelector((pointure:any)=>pointure.pointure.notes);
const imageproduce:any=useAppSelector((image:any)=>image.image.notes);
const category:any=useAppSelector((category:any)=>category.category.notes);
  const handleSubmit = async (e:any) => {
if(category.length!=0&&Global_category!=''){
  console.log('Global_category:',Global_category)
updateCategory(Global_category,category)
}
console.log('Global_category,category:',Global_category,category)
    if (!title||! price || !description ) {
alert("All fields are necessary.");
      return;
    }
   
  allData.title=title.toString();
  allData.price=price.toString();
  allData.description=description.toString();
  allData.Stock=Stock.toString();
  allData.Global_category=Global_category.toString();
  console.log('color:::',colorproduce)
  addproduct(allData,imageproduce,colorproduce,pointureproduce,sizeproduce,category);
  Swal.fire({
    title: "creat product success!",
    text: "You clicked the button!",
    icon: "success"
  });
      }
  return (
    <div >
     <h2 style={{fontSize:'25px'}}>Dashboard</h2>
        <p>Welcome page user</p>
    <div style={{display:'flex'}}>
   
      <button className={style.submit1} onClick={toggleSidebar}>+ add product</button>
     <Add_Category/>
     <Button_All_Category category={categorys.categorys} />
     </div>
  <div >    </div>
      <div className={`${isOpen ? style.ul2 : style.ul2none}`}>
         <form className={style.form}>
          <span onClick={toggleSidebar}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg></span>
       <p className={style.form_title}>Creete product</p>
        <div className={style.input_container} >
          <input placeholder="Enter Title" type="text" onChange={(e) => setTitel(e.target.value)}/>  
          <input placeholder="Enter price" type="text" onChange={(e) => setprice(e.target.value)}/>
          <input placeholder="Enter Stock" type="text" onChange={(e) => setStock(e.target.value)}/>
          <input placeholder="Enter number of allcolor" type="number" onChange={(e) => setncolor(e.target.value)}/>
          <Color ncolor={ncolor}/>
          <input placeholder="Enter number all pointur" type="number" onChange={(e) => setpointure(e.target.value)}/>
        <Pointur ncolor={pointure}/>
        <input placeholder="Enter number all size" type="number" onChange={(e) => setSize(e.target.value)}/>
       <div >
       <Size ncolor={size}/>
       </div>
    
       <Form.Control as="textarea" rows={3}  placeholder="Enter description" className={style.description} onChange={(e) => setdescription(e.target.value)}/>
          <input placeholder="Enter image  url" type="number" onChange={(e) => setnimage(e.target.value)}/>
          <ImageSize ncolor={nimage}/>
          <input placeholder="Enter category 2" type="number" onChange={(e) => setnCategorys(e.target.value)}/> 
          <Category ncolor={nCategorys}/> 
          <Form.Select aria-label="Default select example" style={{width:'300px'}} onChange={(e) => setGlobal_category(e.target.value)}>
      <option>chose your category???</option>
      {
        categorys.categorys&&categorys.categorys.map((category:any,index:any)=>(
<option value={category.Global_category}>{category.Global_category}</option>
        ))
      }
    </Form.Select>

        </div>
     
         <button className={style.submit} type="button" onClick={handleSubmit}>
    Creete
      </button>
   
   </form>
   </div>
 
    </div>
  )
}

  
