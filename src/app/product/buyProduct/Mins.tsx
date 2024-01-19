import { minseQuantite, remove } from '@/Golobal-Redux/allProduct/AllSlice';
import React from 'react';
import { useDispatch } from 'react-redux'; // Import `useDispatch` from `react-redux`
export default function Plus({ category }: any) { // Destructure the `category` prop
  const dispatch = useDispatch(); // Use `useDispatch` to get the dispatch function

  const buyProduct = () => {
category.quantite>1 ?  dispatch(minseQuantite(  category )):dispatch(remove(category))
console.log("category:",category) }
 return (
    <div>
      <p>
        <button onClick={() => buyProduct()} style={{ border: 'none',background: 'none', color: '#000'  }}>
          -
        </button>
      </p>
    </div>
  );
}
