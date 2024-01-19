"use server";
import   Users  from "../../Models/Users";
import  {connectToDB}  from "../ConectMongodb";
import Product from "@/Models/Products";
import creatcategory from "@/Models/category";
export const addUser = async (formData:any) => {
     const firstName=formData.firstName;
     const lastName=formData.lastName;
     const email=formData.email;
     const password=formData.password;
     const job=formData.job;
     const isActive=formData.isActive;
     const category_interiser=formData.category_interiser
  try {
    connectToDB();
   const newUser = new Users({
    job,
    isActive,
    firstName,
    lastName,
     email,
      password,
      category_interiser
       });

       await newUser.save();
  } catch (err) {
    console.log('Failed to create user!',err);
    
  }


};

export const authenticate = async ( formData:any) => {
  const  email=formData.email;
  const password=formData.password;
 try {
   const user= await Users.findOne({email:email,password:password});
  if(user)return user;
  else return 'dont have acount'
  } catch (err) {
    return "Wrong Credentials!";
  }
};

export const addproduct = async (formData:any,image:any,color:any,pointure:any,size:any,category:any) => {
     const title=formData.title;
     const price=formData.price;
     const Global_category=formData.Global_category;
     const description=formData.description;
     const stock=formData.Stock;
  try {
  connectToDB();
   const newProduct = new Product({
    title,price,description,stock,Global_category,category,image,color,pointure,size
       });
 await newProduct.save();
  } catch (err) {
    console.log('Failed to create user!',err);
    
  }


};
export const addcategory = async (formData:any) => {
  const  Global_category=formData;
  const categorys:any=[];

try {
connectToDB();
const newcategory = new creatcategory({
  Global_category,categorys
    });
await newcategory.save();
} catch (err) {
 console.log('Failed to create user!',err);
 
}


};
export const removeUser = async (formData:any) => {
   try {
  
     connectToDB();
await  Users.findByIdAndDelete(formData);

   } catch (err) {
     console.log('Failed to remove user!',err);
    
   }
}
export const removecategory = async (formData:any) => {
  console.log('=====================================================================================',formData)
  try {
 
    connectToDB();
await  creatcategory.findByIdAndDelete(formData);

  } catch (err) {
    console.log('Failed to remove user!',err);
   
  }
}
export const removeProduct = async (formData:any) => {
  console.log(formData)

   try {
  
     connectToDB();
  await  Product.findByIdAndDelete(formData);
 
   } catch (err) {
     console.log('Failed to remove Product!',err);
    
   }
}
