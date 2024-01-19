'use client'
import { MdSearch } from "react-icons/md";
import Link from 'next/link';
import { useState } from 'react';
import styles from './navMobil.module.css';
import StyleB from './styleButton.module.css'
import { usePathname } from 'next/navigation';
import Menu from './menu'
import { fetchCategory } from "@/utile/action/feetchData";
let All_Categorys:any='';
const Sidebar = (categorys:any) => {
  const[data,setdata]:any=useState([]);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const feetch_All_Categorys=async () => {
    All_Categorys=await fetchCategory();
  data.push(All_Categorys);
  }
  feetch_All_Categorys();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    
  };
  const path=usePathname();
  console.log("dataaa:",categorys)
  return (
    <div>
        <label className={StyleB.container}>
  <input type="checkbox" onClick={toggleSidebar}/>
  <div className={StyleB.checkmark}style={{color:"#000"}}>
    <span style={{background:"#000"}}></span>
    <span style={{background:"#000"}}></span>
    <span style={{background:"#000"}}></span>
  </div>
</label>  
      
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`} >
    <ul className={styles.ul}>
    <li className={styles.li}>
          <div className={`${styles.a } ${path=='/product'?styles.satr:''}`}   onClick={toggleSidebar}>
           
            </div>
        </li>
        <li className={styles.li}>
          <Link className={`${styles.a } ${path=='/product'?styles.satr:''}`} href="/product"  onClick={toggleSidebar} style={{fontSize:"23px"}}>
        Products
            </Link>
        </li>
        <li style={{marginTop:"10px",paddingRight:"30px"}}>
          <div > 
            <Menu categorys='none'/>
          </div>
        </li>
        <li className={styles.li}>
          <Link className={`${styles.a } ${path=='/Signe'?styles.satr:''}`} href="/Signe"  onClick={toggleSidebar} style={{fontSize:"23px"}}>
            Login
            </Link>
            <Link className={`${styles.a } ${path=='/product'?styles.satr:''}`} href="/product"  onClick={toggleSidebar} style={{fontSize:"23px"}}>
                    <span style={{marginRight:"7px"}}>searsh</span>  
                      <div style={{marginTop:"3px",paddingBottom:"15px"}} className={styles.a}>
      <MdSearch size={27}/>
            </div>
            </Link>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;
