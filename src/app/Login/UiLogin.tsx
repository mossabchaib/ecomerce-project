'use client'
import { useState } from 'react'
import style from './style.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { addUser } from '@/utile/action/dataaction'
export default function UiLogin() {
  const [Click, setClick] = useState(false);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setjob] = useState("user");
  const [isActive, setIsActive] = useState(true);
  const [password, setPassword] = useState("");
  const [confarmpassword, setconfarmpassword] = useState("");
  const [allData, setAllData]=useState({firstName:firstName,lastName:lastName,email:email,password:password,job,isActive})
  const router=useRouter()
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log("hi")
console.log(firstName)
    if (!firstName||!lastName|| email.slice(email.length-11,email.length-1)=='@gmail.com' || password.length<8||!confarmpassword) {
alert("All fields are necessary.");
      return;
    }
if(password!=confarmpassword){
  alert('false');
  return;
}

if(!Click){
allData.firstName=firstName;
allData.lastName=lastName;
allData.email=email;
allData.password=password;
addUser(allData);
router.replace("/Signe")
      }
      setClick(true);}

  return (
    <>


    <div className={style.FormContainer}>

    <div className={style.logoContainer}>Welcome!</div>

    <div className={style.line}></div>

    <form className={style.form} >
      <div className={style.formGroup}>
        <label htmlFor="first Name">First name</label>
        <input required placeholder="Enter your First name" name="email" id="email" type="text"   onChange={(e) => setfirstName(e.target.value)}/>
      </div>
      <div className={style.formGroup}>
        <label htmlFor="email">Last Name</label>
        <input required placeholder="Enter your Last Name" name="email" id="email" type="text"   onChange={(e) => setlastName(e.target.value)}/>
      </div>
      <div className={style.formGroup}>
        <label htmlFor="email">Email</label>
        <input required placeholder="Enter your email" name="email" id="email" type="text"  onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className={style.formGroup}>
        <label htmlFor="password">Password</label>
        <input required name="password" placeholder="Enter your password" id="password" type="password"  onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className={style.formGroup}>
        <label htmlFor="password">confarme your Password</label>
        <input required name="password" placeholder="Enter your password" id="password" type="password"  onChange={(e) => setconfarmpassword(e.target.value)}/>
      </div>
      <button type="button" className={`${!Click? style.formSubmitBtn:style.formSubmitBtnClose}`}  onClick={handleSubmit}>
     { !Click?<div>creet an account</div>: <div>Loading...</div>}
      </button>
    </form>

    <p className={style.signupLink}>
     do you have an account?
      <Link className={`${style.signupLink} ${style.link}`} href="/Signe">
        Sign up now
      </Link>
    </p>
  </div>
 
  </>
  )
}


