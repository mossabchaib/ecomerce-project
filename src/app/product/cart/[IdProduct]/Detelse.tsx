'use client'
import CategoryName from './CategoryName'
import style from './style.module.css'
import Add from './Add'
import { usePathname } from 'next/navigation'
import {  useState } from 'react'
import Color_Handal from './Color'
import { useAppSelector } from '@/Golobal-Redux/hooks'
import { RootState } from '@/Golobal-Redux/Store'
let colorS:any='';
export default function Detelse(data:any) {
  const [Size,setsize]=useState('')
  const [Color,setcolor]=useState('')
  const [Pointure,setpointure]=useState('')
  const [data_Color,setDataColr]=useState('')
const path=usePathname()
const index:any=path[path.length-1]

const handalColor=(e:any)=>{
colorS= Color_Handal(e,data.data[index].color[1])
setDataColr(colorS);
}
const state:any=useAppSelector((product:RootState)=>product.id)
let product_detelse:any;
if(state._id!=''){console.log("useAppSelector");product_detelse=state;}
else {console.log("data1");product_detelse=data.data[index];}
//console.log("product_detelse.pointure.length:",product_detelse.pointure[0],product_detelse.size[0])
const [Image,setimage]=useState(product_detelse&&product_detelse.image[0][0]||'')
console.log("product_detelse:",product_detelse,data.data,index)
  return (
  <div className={style.bigcontainar} >
      <div className={style.container}  key={product_detelse&&product_detelse._id}>
        <div>
    <div className={style.productimage} >
     {/* <Image url={data.image}/> */}
     <img src={Image}  alt="" style={{width:'260px',height:'300px'}}/>
     </div>
     
     <div className={style.galory}  style={{}}>
    {product_detelse&&product_detelse.image[0]&&product_detelse.image[0].map((image:any)=>(
      <div className={style.galoryImage}>
        <img src={image} onClick={()=>setimage(image)}  alt="" style={{width:'100px',height:'120px'}}/>
        </div>
     ))} 
   
   </div>
    </div>
    <div className={style.productinfo}>
      <h1 className={style.producttitle} style={{fontSize:'25px'}}>{product_detelse&&product_detelse.title}</h1>
      <h3 className={style.productprice}><span className={style.span}></span >${product_detelse&&product_detelse.price}</h3>
      <hr />
      <h1 style={{fontSize:"25px",margin:"13px 5px",marginTop:"5px"}}>description:</h1>
      <p className={style.productdescription} style={{fontSize:'17px'}}>{product_detelse&&product_detelse.description}</p>
     
   

      { product_detelse&&product_detelse.size[0]&&product_detelse.size[0]!=undefined ?
       <div>
       <b style={{fontSize:"20px"}}>size:</b>
         {product_detelse.size[0].map((size:any,index:any)=>{
          if(index!=0)
          return(
          <button  type='button'onClick={()=>{handalColor(size.size);setsize(size.size);}} value={size.size} className={`${size.size==Size? style.buttonChoice: style.button}`}>{size.size}</button>
        )})} 
        </div>:<div></div>}
        { product_detelse&&product_detelse.pointure[0]&&product_detelse.pointure[0]!=undefined?
       <div>
       <b style={{fontSize:"20px"}}>pointer:</b>
         {product_detelse&&product_detelse.pointure[0]&&product_detelse.pointure[0].map((pointure:any,index:any)=>{
          if(index!=0)
          return(
          <button  type='button'onClick={()=>setpointure(pointure.pointure)} value={pointure.pointure} className={`${pointure.pointure==Pointure? style.buttonChoice: style.button}`}>{pointure.pointure}</button>
        )})} 
        </div>:<div></div>}
     <div style={{display:"flex"}}>
      
  <b style={{fontSize:"20px",paddingTop:"35px"}}>color:</b>
  <div style={{display:"flex"}}>
        { colorS&&colorS.map((color:any)=><div >
            <button type='button'onClick={()=>setcolor(color)}  className={`${color==Color? style.buttonChoice: style.button}`}>{color}</button>
         </div>) 
}
</div>  
      </div>
<Add id={data.data} color={Color} Pointure={Pointure} Size={Size}/> 
    </div>
  
    </div>
    <div className={style.ourProducts}>
    <h3 style={{fontSize:"30px",margin:'25px',textDecoration:' underline'}}>outher products</h3>
     
      <div>
 <CategoryName data={data.data} Category={product_detelse&&product_detelse.Global_category}/> 
      </div>
    </div>
    </div>
  )
}
