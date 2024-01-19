'use client'
import React from 'react';
import { FaUser } from 'react-icons/fa';
import Remove from './remove';
import Searsh from '../Component/searsh/Searsh'

const orders = (user:any) => {
 const job='Admin';
 const palaceholder:any="search user"
 return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between px-4 pt-4'>
        <Searsh />
        <h2>table user</h2>
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
            {user.data&& user.data.map((user:any) => {
             if(user.job!=job)  return (
              <li
                key={user._id}
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
              >
                <div className='flex'>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                   <FaUser className='text-purple-800' /> 
                    {/* <Image/> */}
                  </div>
                  <div className='pl-4'>
                    <p className='text-gray-800 font-bold'>
                 {user.firstName}
                    </p>
                    <p className='text-gray-800 text-sm'>
                    {user.lastName}
                      </p>
                  </div>  
                </div>
                <p className='text-gray-600 sm:text-left text-right'>
                  <span
                    className={
                    'bg-blue-200 p-2 rounded-lg'
                      
                    }
                  >
                  {user.email}
                  </span>
                </p>
                <p className='hidden md:flex'>{user.password}</p>
                <div className='sm:flex hidden justify-between items-center'>
                  <p><Remove id={user._id}/></p>
                 
                </div>
              </li>
            )})}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orders;