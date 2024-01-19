 'use client'
 import { useAppDispatch, useAppSelector } from '@/Golobal-Redux/hooks'
 import { useState } from 'react'
 import { RootState } from '@/Golobal-Redux/Store'
 import style from './style.module.css'
 import Link from 'next/link'
 import { useRouter } from 'next/navigation'
 import { useFormState } from 'react-dom'
 import { authenticate } from '@/utile/action/dataaction'
 import { addcontact } from '@/Golobal-Redux/signSlice/sign'
 import { updateuser } from '@/utile/action/update'
 import Logout from './Logout'

 export default function Ui() {
   const dispatch=useAppDispatch();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [allData, setAllData]=useState({email:email,password:password})
   const [Click, setClick] = useState(false);
   const router=useRouter()
   const handleSubmit = async (e:any) => {
     e.preventDefault();
      if ( email.slice(email.length-11,email.length-1)=='@gmail.com' || password.length<8) {
  alert("All fields are necessary.");
        return;
      }
      if(!Click){
  allData.email=email;
  allData.password=password;
  const user:any=await authenticate(allData);
  if(user=='dont have acount'){
    alert("you dont have a count cree an acount?");
    router.replace("/Login")
  }
  else{
    user.isActive=true;
    const userapdate:any=await updateuser(user._id,user)
      localStorage.setItem('user',JSON.stringify(userapdate));
   
    if(userapdate.job=='user')router.replace("/product");
  else router.replace("/Admin_page");
  }
       }     
      setClick(true);}
const userExist:any=localStorage.getItem('user');

   return (<>
    
       {   userExist==null?
         <form className={style.FormContainer}>

     <div className={style.logoContainer}>Welcome Back!</div>

   

     <div className={style.line}></div>

     <form className={style.form}>
       <div className={style.formGroup}>
         <label htmlFor="email">Email</label>
         <input required placeholder="Enter your email" name="email" id="email" type="text"   onChange={(e) => setEmail(e.target.value)}/>
       </div>

       <div className={style.formGroup}>
         <label htmlFor="password">Password</label>
         <input required name="password" placeholder="Enter your password" id="password" type="password"  onChange={(e) => setPassword(e.target.value)}  />
       </div>
 <button type='submit' onClick={handleSubmit} className={`${!Click? style.formSubmitBtn:style.formSubmitBtnClose}`}>
         {!Click?<div>Sign In</div>: <div>Loading...</div>}
       </button>
      
     </form>

     <a className={`${style.forgotPasswordLink} ${style.link}`} href="#">
       Forgot Password
     </a>

     <p className={style.signupLink}>
       Don't have an account?
       <Link className={`${style.signupLink} ${style.link}`} href="/Login">
         Creet acount?
       </Link>
     </p>
   </form>:<Logout/>}
   </>
   )
 }
