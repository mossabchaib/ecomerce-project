'use client'
import Style from './[Detelse_Shoping]/stylee.module.css'
import React, { useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../Component/data/Data';
import Link from 'next/link';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { verify } from 'crypto';
const orders = (order:any) => {
console.log(order.data)
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between px-4 pt-4'>
        <h2>Orders({order.data.Cardfeetch&&order.data.Cardfeetch.length})</h2>
        <h2>order no verify(<span style={{color:"red"}}>{order.data.i}</span>)</h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Order</span>
            <span className='sm:text-left text-right'>Recent Orders</span>
            <span className='hidden md:grid'>Last Order</span>
            <span className='hidden sm:grid'>verify</span>
          </div>
          <ul>
            {order.data.Cardfeetch&&order.data.Cardfeetch.map((order:any,index:any) => (
              <li
                key={order._id}
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
              >
                <div className='flex'>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <FaShoppingBag className='text-purple-800' />
                  </div>
                  <div className='pl-4'>
                    <p className='text-gray-800 font-bold'>
                      ${order.priceTotle.toLocaleString()}
                    </p>
                    <p className='text-gray-800 text-sm'>{order.firstName}</p>
                  </div>
                </div>
                <p className='text-gray-600 sm:text-left text-right'>
                  <span
                    className={
                      order.Recent_Orders == 'I dont know'
                        ? 'bg-red-300 p-2 rounded-lg'
                        :  'bg-blue-200 p-2 rounded-lg'
                    }
                  >
                    {order.Recent_Orders}
                  </span>
                </p>
                <p className='hidden md:flex'>{order.createdAt.toString().slice(0,13)}</p>
                <div className='sm:flex hidden justify-between items-center'>
                 
               <p className={`${order.verifer=="No"?Style.red:Style.black}`} >{order.verifer}</p>
                 <NavDropdown title="Action" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" >  
              <Link href={`/Admin_page/detelse_comonde/${index}`} style={{display:'flex'}}> 
                <span style={{marginRight:'5px'}}> Edit</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>    </Link>
              </NavDropdown.Item>
            </NavDropdown>
                </div>
                <div>
            
                </div>
              </li>
              
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orders;