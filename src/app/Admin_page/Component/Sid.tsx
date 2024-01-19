'use client'
import React from 'react';
import { useAppSelector } from '@/Golobal-Redux/hooks'
import { RootState } from '@/Golobal-Redux/Store'
import Link from 'next/link';
import { FaSignOutAlt } from 'react-icons/fa';
import {RxBarChart, RxSketchLogo, RxDashboard, RxPerson,RxZoomOut } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { useRouter } from 'next/navigation'
const Sidebar = ({ children }:any) => {
  let userExist:any=localStorage.getItem("user")
  userExist=JSON.parse(userExist);
const router=useRouter()
  return (
    <>
   {/* {   userExist!=null&&userExist.job=='Admin'?   */}
   <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/Admin_page'>
            <div className={'bg-purple-800 text-white p-3 rounded-lg inline-block'}>
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link href='/Admin_page/add_product'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-3 p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href='/Admin_page/User-acount'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-3 p-3 rounded-lg inline-block'>
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href='/Admin_page/detelse_comonde'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-3 p-3 rounded-lg inline-block'>
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href='/Admin_page/Chart_comonde'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxBarChart size={20} />
            </div>
          </Link>
          <Link href='/Admin_page/Logout'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FaSignOutAlt size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
    {/* : router.replace("/Signe")} */}
    </>
  );
};

export default Sidebar;