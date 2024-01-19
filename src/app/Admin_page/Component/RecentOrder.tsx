import React from 'react';
import { data } from './data/Data';
import { FaShoppingBag } from 'react-icons/fa';
import { Recent_Orders } from '@/utile/action/handal';

const RecentOrders = async() => {
  const Recent=await Recent_Orders();
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1>Recent Orders</h1>
      <ul>
        {Recent&&Recent.map((order:any, id:any) => (
          <li
            key={id}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
          >
            <div className='bg-purple-100 rounded-lg p-3'>
              <FaShoppingBag className='text-purple-800' />
            </div>
            <div className='pl-4'>
              <p className='text-gray-800 font-bold'>${order.priceTotle}</p>
              <p className='text-gray-400 text-sm'>{order.firstName}</p>
            </div>
            <p className='lg:flex md:hidden absolute right-6 text-sm'>{order.updatedAt.toString().slice(0,10)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;