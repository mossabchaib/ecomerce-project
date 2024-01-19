'use client'
import React from 'react';
import { FaUser } from 'react-icons/fa';
import Remove from './remove';
import Search from '../Component/searsh/Searsh';
const orders = (Admin:any) => {
  const job:any='user';
  return (
    <div className='bg-gray-100 '>
      <div className='flex justify-between px-4 pt-4'>
        <Search/>
        <h2>table Admin</h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>name</span>
            <span className='sm:text-left text-right'>Email</span>
            <span className='hidden sm:grid'>password</span>
            <span className='hidden sm:grid'>action</span>
          </div>
          <ul>
            {Admin.data&& Admin.data.map((Admin:any) => {
         if(Admin.job!=job) return(    <div>
              <li
                key={Admin._id}
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
              >
                <div className='flex'>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                 <FaUser className='text-purple-800' /> 
                 {/* <Image/>  */}
                  </div>
                  <div className='pl-4'>
                    <p className='text-gray-800 font-bold'>
                 {Admin.firstName}
                    </p>
                    <p className='text-gray-800 text-sm'>
                    {Admin.lastName}
                      </p>
                  </div>  
                </div>
                <p className='text-gray-600 sm:text-left text-right'>
                  <span
                    className={
                    'bg-blue-200 p-2 rounded-lg'
                      
                    }
                  >
                  {Admin.email}
                  </span>
                </p>
                <p className='hidden md:flex'>{Admin.password}</p>
                <div className='sm:flex hidden justify-between items-center'>
                  <p><Remove id={Admin._id}/></p>
                 
                </div>
              </li>
              </div>)}
            )}
        
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orders;