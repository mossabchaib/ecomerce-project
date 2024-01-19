
import { MdSearch } from "react-icons/md";
import Menu from './menu'
import Link from 'next/link';
import {RxPerson } from 'react-icons/rx';
import styles from './StyleN.module.css';
import NavbarMobil from './NavbarMobil'
import CartNav from './CartNav';
import Logo from '../../public/image/Logo.jpg'
import { fetchCategory } from "@/utile/action/feetchData";
const Navbar = async() => {
const logo:any=Logo;

 const categorys:any=await fetchCategory()
console.log("category:",categorys);
  return (
    <div >
    
 <div className={styles.nav}>
           <div className={styles.Sid} ><NavbarMobil /></div>
      <Link className={styles.Logo} href='/' style={{zIndex:'0',fontSize:'18px',display:"flex"}} >
    Acam Store 
       </Link>
      <ul className={styles.ul}>
    
        <li className={styles.li}>
          <Link className={styles.a} href="/product">
          <span style={{fontSize:"20px",paddingBottom:"15px"}}> Products </span>
           
           
           </Link>
        </li>
      
        <li className={styles.li}>
        <div className={styles.a } >
        <span style={{margin:"0px 10px",paddingBottom:"15px"}}> <Menu category={categorys}/></span> 
        
       </div>
        </li>
        <li className={styles.li}>
        
     <Link  href="/product">
   
     <b>
      <div style={{marginTop:"5px",paddingBottom:"15px"}} className={styles.a}>
      <MdSearch size={25}/>
            </div>
            </b>
          
      </Link>
        </li>
    
      </ul>
      <ul className={styles.ul} style={{paddingBottom:"15px"}}>
      <li className={styles.Cart}>
      <Link href="/Signe">
      <b >
      <div style={{marginTop:"7px",paddingTop:"10px"}} className={styles.a} >
              <RxPerson size={25} />
            </div>
            </b>
      </Link>
      </li>
        <li className={styles.li}>
          <div className={styles.Cart}  ><CartNav/></div>
        </li>
      </ul>
    </div>
</div>
    
    )
    }
  export default Navbar;
