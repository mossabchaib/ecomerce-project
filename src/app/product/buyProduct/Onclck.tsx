'use client'
import React from 'react'
import Swal from 'sweetalert2';
import { useAppDispatch } from '@/Golobal-Redux/hooks';
import styles from './styles.module.css';
import handal from './handal';
import { remove } from '@/Golobal-Redux/allProduct/AllSlice';
export default function onclck(product:any) {
    const dispatch = useAppDispatch();
    console.log("product:",product)
  const removeItem = (productId: string) => {
    Swal.fire({
      title: "Do you want to delet product?",
      showCancelButton: true,
      confirmButtonText: "remove",
    }).then((result:any) => {
      if (result.isConfirmed) {
        Swal.fire("remove!", "", "success");
        dispatch(remove(product.product))
      handal(product);

      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    })
  
  };
  return (
    <div>
        {/* <span className={styles.item_title} ><button onClick={() => removeItem(product.product.id)} style={{border:'none',color:'#000'}}>X</button></span> */}
        <span className={styles.item_title} onClick={() => removeItem(product.product.id)}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg></span>
    </div>
  )
}
