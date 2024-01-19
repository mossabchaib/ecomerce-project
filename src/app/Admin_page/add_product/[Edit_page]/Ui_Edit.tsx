'use client'
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
import { usePathname, useRouter } from "next/navigation";
import styles from "./style.module.css";
import Image from "next/image";
import {  updateCategory, updateProduct } from "@/utile/action/update";
import Color from "./Color";
import Size from './Size'
import Pointure from './Pointur'
import ImageSize from './ImageSize'
import { useState } from "react";
import { useAppSelector } from "@/Golobal-Redux/hooks";
import Categoryss from "./categorys"
const SingleProductPage = (product:any) => {
  const path=usePathname()
  
  const [nCategorys,setnCategorys]=useState(product);
  const index:any=path[path.length-1]
  const [Categorys,setCategorys]=useState(product.data[index].category);
  const [id,setid]=useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [title,setTitel]=useState(product.data[index].title);
  const [price,setprice]=useState(product.data[index].price);
  const [Category,setCategory]=useState('');
  const [description,setdescription]=useState(product.data[index].description);
  const [nimage,setnimage]=useState(product.data[index].image.length+1);
  const [Stock,setStock]=useState(product.data[index].stock);
  const [ncolor,setncolor]=useState(product.data[index].color.length+1);
  const [pointure,setpointure]=useState(product.data[index].pointure.length+1)
  const [colorproduc,setcolorproduc]=useState()
  const [sizeproduc,setsizeproduc]=useState([])
  const [pointureproduc,setpointureproduc]=useState([])
  const [imageproduc,setimageproduc]=useState([])
  const [Global_category,setGlobal_category]=useState('')
  const [size,setSize]=useState(product.data[index].size.length+1)
  const [allDataSelector, setAllDataSelector]=useState({colorproduc:colorproduc,sizeproduc:sizeproduc,pointureproduc:pointureproduc,imageproduc:imageproduc});
  const [allData, setAllData]=useState({id:id,title:title,price:price,Global_category:Global_category,description:description,Stock:Stock})
  const colorproduce:any=useAppSelector((color:any)=>color.color.notes[color.color.notes.length-1]);
  const sizeproduce:any=useAppSelector((size:any)=>size.size.notes[size.size.notes.length-1]);
  const pointureproduce:any=useAppSelector((pointure:any)=>pointure.pointure.notes[pointure.pointure.notes.length-1]);
  const imageproduce:any=useAppSelector((image:any)=>image.image.notes[image.image.notes.length-1]);
  const category:any=useAppSelector((category:any)=>category.category.notes);
 const routr=useRouter()
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log('Global_category,category:',Global_category,category)
    if(category.length!=0&&Global_category!=''){
      updateCategory(Global_category,category)
      }
    if (!title||! price|| !Categorys || !description ) {
alert("All fields are necessary.");
      return;
    }
    allData.title=title.toString();
    allData.price=price.toString();
    allData.description=description.toString();
    allData.Stock=Stock.toString();
    allData.Global_category=Global_category.toString();
    allData.id=product.data[index]._id
  updateProduct(allData,imageproduce,colorproduce,pointureproduce,sizeproduce,category);
  Swal.fire({
    title: "update success!",
    text: "You clicked the button!",
    icon: "success"
  });
 // routr.replace('/Admin_page/add_product')
      }
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="" alt="" fill />
        </div>
        product.title
      </div>
      <div className={styles.formContainer}>
        <form  className={styles.form}>
          <input type="hidden" name="id"  />
          <label>Title</label>
          <input type="text" name="title" value={title} onChange={(e) => setTitel(e.target.value)} />
          <label>Price</label>
          <input type="number" name="price" value={price} onChange={(e) => setprice(e.target.value)}/>
          <label>Stock</label>
          <input type="number" name="stock" value={Stock} onChange={(e) => setStock(e.target.value)} />
          <label>category</label>
          <input
            type="text"
            name="color"
            value={Categorys}
            onChange={(e) => setCategorys(e.target.value)}
          />
          
           <label>description</label>
          <input
            type="text"
            name="color"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
          <label>color</label>
           <input type="number" name="stock" value={ncolor} onChange={(e) => setncolor(e.target.value)}/>
           <Color ncolor={ncolor}/>
           <label>size</label>
           <input type="number" name="stock" value={size} onChange={(e) => setSize(e.target.value)} />
           <Size ncolor={size}/>
           <label>pointur</label>
           <input type="number" name="stock" value={pointure} onChange={(e) => setpointure(e.target.value)} />
           <Pointure ncolor={pointure}/>
           <label>image</label>
           <input type="number" name="stock" value={nimage} onChange={(e) => setnimage(e.target.value)}/>
           <ImageSize ncolor={nimage}/>
           <input placeholder="Enter category 2" type="number" onChange={(e) => setnCategorys(e.target.value)}/> 
          <Categoryss ncolor={nCategorys}/> 
          <Form.Select aria-label="Default select example" style={{width:'300px'}} onChange={(e) => setGlobal_category(e.target.value)}>
      <option>chose your category???</option>
      {
        product.categorys&&product.categorys.map((category:any,index:any)=>(
<option value={category.Global_category}>{category.Global_category}</option>
        ))
      }
    </Form.Select>
          <button type='submit' onClick={handleSubmit}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;