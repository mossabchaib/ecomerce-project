'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Img from '../app/carousel/Img'
import React from 'react';
import { useAppSelector } from '@/Golobal-Redux/hooks';
import { RootState } from '@/Golobal-Redux/Store';
import { addCard_Shoping } from '@/utile/action/information_Shopping_client_action';
import { updateuser, updateuserCat } from '@/utile/action/update';
const CheckoutForm = () => {

    const data:any=useAppSelector((stat:RootState)=>stat.card);
  const priceTotal=data.notes&&data.notes.reduce((acc:number,product:any)=>{
    const i:number= Number( product.id.price);
 acc+=(i*product.quantite);
  return acc
},0)
    const [user, setuser] = useState("");
    useEffect(()=>{
      const save:any=localStorage.getItem("user");
      setuser(JSON.parse(save))
    },[])
const [firstName, setfirstName] = useState("");
const [lastName, setlastName] = useState("");
const [email, setEmail] = useState("");
const [code_promo, setcode_promo] = useState("");
const [numiro_client,setnumiro_client]=useState("");
const [ city,setcity]=useState("");
const [State,setState]=useState("");
const [Address,setAddress]=useState("");
const [Title,setTitle]:any=useState([]);
const [ color,setcolor]:any=useState([]);
const [ size,setsize]:any=useState([]);
const [id,setid]:any=useState([]);
const [price,setprice]:any=useState([])
const [priceTotle,setpriceTotle]:any=useState('')
// const [card_shoping,setcard_shoping]:any=useState({title:Title,id:id,priceT:price});
const [card,setcard]:any=useState([]);
const [verifer,setverifer]:any=useState("No");
const [Recent_Orders,setRecent_Orders]:any=useState("I dont know");
const [allData, setAllData]=useState({firstName:firstName,
                                      lastName:lastName,
                                      email:email,
                                      numiro_client:numiro_client,
                                      city:city,
                                      State:State,
                                   priceTotle:priceTotle,
                                    Address:Address,
                                    verifer:verifer,
                                    Recent_Orders:Recent_Orders,
                                  card:card,
                                    })
  const router=useRouter()
  const user_Exist:any=localStorage.getItem("user");
  const user_id:any=JSON.parse(user_Exist);
  const handleSubmit = async () => {
    allData.firstName=firstName;
    allData.lastName=lastName;
    allData.email=email;
    allData.State=State;
    allData.city=city;
    allData.numiro_client=numiro_client;
    allData.Address=Address;
    allData.priceTotle=priceTotal.toString();
     setcard([...data.notes])
     console.log("data.notes2:",data.notes)
   if(card.length) addCard_Shoping(allData,card)
  const user:any=await updateuserCat(user_id._id,data.notes,user_id);
const user_save:any=user&&JSON.parse(user);
if (user) {
  localStorage.removeItem("user");
  localStorage.setItem("user",JSON.stringify(user_save));
}
  }
  console.log("data.notes:",data.notes)
  return (
  
    <div className="container">
      <main>
        <div className="py-5 text-center">
            <div className="d-block mx-auto "style={{width:"100px", height:"80px" }}  >
  
          </div>
          <h2>Confarme your shopping Cart</h2>
         </div>

        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
          
                <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">{data.notes.length}</span>
            </h4>
            
            <ul className="list-group mb-3">
         
            {  data.notes.map((product:any)=>(
                          <>
              <li className="list-group-item d-flex justify-content-between lh-sm">
          
                <div>
               
                  <h6 className="my-0">{product.id&&product.id[0].title}</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">{product.id&&product.id[0].price}</span>
              </li>
              </>
))}
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small></div>
 
                <span className="text-success">−$5</span>
              </li>


              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${price}</strong>
              </li>
            </ul>
         
            <form className="card p-2">
             
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Promo code" onChange={(e) => setcode_promo(e.target.value)}/>
                <button type="submit" className="btn btn-secondary">Redeem</button>
              </div>
            </form>
          </div>
          
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate>
         {/* {user==null?  */}
             <div>
                        <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">First name</label>
                  <input type="text" className="form-control" id="firstName" placeholder=""  required  onChange={(e) => setfirstName(e.target.value)}/>
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
              
          
                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Last name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="" required onChange={(e) => setlastName(e.target.value)}/>
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                                        <div className="col-12">
                  <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com"  onChange={(e) => setEmail(e.target.value)}/>
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                </div>
               {/* :<div></div> 
             }  */}
                <div className="col-12">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="1234 Main St" required  onChange={(e) => setAddress(e.target.value)}/>
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
             
                <div className="col-12">
                  <label htmlFor="nimiro" className="form-label">numiro <span className="text-muted"></span></label>
                  <input type="text" className="form-control" id="nimiro" placeholder="enter numiro d"onChange={(e) => setnumiro_client(e.target.value)} />
                </div>

                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">Country</label>
                  <select className="form-select" id="country" required onChange={(e) => setState(e.target.value)} >
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">State</label>
                  <select className="form-select" id="state" required onChange={(e) => setcity(e.target.value)}>
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

               
            </div>
       <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="button" onClick={handleSubmit}>Continue to checkout</button>
            </form>
          </div>
        </div>
      </main>
</div>

  );
}

export default CheckoutForm;