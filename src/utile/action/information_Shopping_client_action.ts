"use server";
import product_create from "@/Models/Products";
import   Card  from "../../Models/information_client";
import  {connectToDB}  from "../ConectMongodb";
export const addCard_Shoping = async (formData:any,card:any) => {
  console.log("fromData",formData,card)
     const firstName=formData.firstName;
     const lastName=formData.lastName;
     const email=formData.email;
     const numiro_client=formData.numiro_client;
     const city=formData.city;
     const State=formData.State;
     const Address=formData.Address;
   const priceTotle=formData.priceTotle;
  const verifer=formData.verifer;
  const Recent_Orders=formData.Recent_Orders
     try {
      connectToDB();
    const newinformation = new Card({
      firstName,lastName, email,numiro_client,city ,State,Address,priceTotle,verifer,Recent_Orders,card
        });

        await newinformation.save();
  } catch (err) {
    console.log('Failed to create user!',err);
    
  }
}
  export const addproduct = async (formData:any,card:any) => {
       const firstName=formData.firstName;
       const lastName=formData.lastName;
       const email=formData.email;
       const numiro_client=formData.numiro_client;
       const city=formData.city;
       const State=formData.State;
       const Address=formData.Address;
     const priceTotle=formData.priceTotle;
    
       console.log(firstName,lastName, email,numiro_client,city ,State,Address,priceTotle )
  
    try {
    
      connectToDB();
      const newinformation = new Card({
        firstName,lastName, email,numiro_client,city ,State,Address,priceTotle,card
          });
  
          await newinformation.save();
    } catch (err) {
      console.log('Failed to create user!',err);
      
    }
};

  