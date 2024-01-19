import { plusQuantite } from '@/Golobal-Redux/allProduct/AllSlice';
import React from 'react';
import { useDispatch } from 'react-redux'; // Import `useDispatch` from `react-redux`

export default function Plus({ category }: any) { // Destructure the `category` prop
  const dispatch = useDispatch(); // Use `useDispatch` to get the dispatch function

  const buyProduct = () => {
console.log('a:',category.id)
    // You need to pass the `product` to the action creator, assuming that's what you intended
    dispatch(plusQuantite(  category )); // Dispatch the action
  }

  return (
    <div>
      <p>
        <button onClick={() => buyProduct()} style={{ border: 'none', background: 'none', color: '#000' }}>
          +
        </button>
      </p>
    </div>
  );
}
