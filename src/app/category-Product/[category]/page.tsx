import React from 'react'
import Category from './Category';
import CategoryChoice from './CategoryChoice';
import All_Global_category from './All_Global_category';
export default async function page() {
    return (
    <div>
      <Category/>
  <CategoryChoice/> 
    <hr />
      <h2 style={{margin:"20px",marginBottom:"60px",fontSize:"30px"}}>All product </h2>
      <All_Global_category/>  
    </div>
  )
}
