import type { RootState } from '../../../Golobal-Redux/Store'
import {  useAppDispatch, useAppSelector } from '../../../Golobal-Redux/hooks';
import Delete from './Onclck'
import Link from 'next/link';

import styles from './styles.module.css'; // Import CSS styles
import Plus from './Plus';
import Minse from './Mins';
import { add } from '@/Golobal-Redux/buySlice/buy';
import { addId } from '@/Golobal-Redux/idSlice/DataSlice';
export default function CartModal() {
  const dispatch=useAppDispatch()
const pr:any=useAppSelector((stat:RootState)=>stat.card.notes);
  const price=pr&&pr.reduce((acc:number,product:any)=>{
    const i:number= Number( product.id&&product.id[0].price);
 acc+=(i*product.quantite);
  return acc
},0)
const card_close=()=>{
  dispatch(add(''))
}
const sendId=(id:any)=>{
  dispatch(addId(id))
    }
    return (
    <div style={{background:"#f8f9fa"}}>
      <div className={styles.container}>
          <ul className={styles.cart_item_list}>
          <div className={styles.scrollbar_track}>
    <div className={styles.scrollbar_thumb }>
            {pr&&pr.map((product:any,index:any) => (
              <li key={product.id&&product.id[0]._id} className={styles.cart_item} >
                 
                <div className={styles.item_details}>
                  <div className={styles.delete_button}>
                  <Delete product={product}/>
                  </div>
                  <Link href={`/product/cart/${product.id&&product.id._id}${index}`} onClick={card_close}>
                    <div className={styles.item_image} onClick={()=>sendId(product.id)} >
                      <img  src={product.id&&product.id[0].image[0][0]} alt={product.id&&product.id[0].image}  style={{width:'3.5rem',height:'3.5rem'}}/>
                    </div>
                    <div className={styles.item_info}>
                      <span className={styles.item_title}></span>
                      <p className={styles.item_description}></p>
                    </div>
                  </Link>
                  <div style={{
                    margin:'8px',padding:'5px' }}> <p className={styles.item_description}>{product.id&&product.id[0].title.slice(0,20)}</p></div>
                  <div className={styles.item_actions}>

                    <p>{product.id&&product.id[0].price}$</p>
                    <div className={styles.item_quantity}>
                 <Plus category={product}/>
                      <p className={styles.quantity_text}>
                        <span className={styles.quantity_text} >{product&&product.quantite}</span>
                      </p>
                   <Minse category={product}/>
                    </div>
                  </div>
                </div>
           
              </li>
            ))}
              </div>
        </div>
             <br />
          </ul>
          <div className={styles.cart_details}>
          
          <hr />
            <div className={styles.pricee}>
              <p>Total price </p>
          <p style={{marginRight:'7px'}}>${price}</p>
            </div>
          </div>
          <Link href="/confarme" className={styles.checkout_button} onClick={card_close}>
            Proceed to Checkout
          </Link>
        </div>
      
    </div>
  );
}
