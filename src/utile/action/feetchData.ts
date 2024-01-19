import   User  from "../../Models/Users";
import Product from "@/Models/Products";
import  {connectToDB}  from "../ConectMongodb";
import Allcategory from "@/Models/category";
import   Card  from "../../Models/information_client";
export const fetchUsers = async (q:any) => {
  const regex = new RegExp(q, "i");
  console.log("regx",regex)
   try {
      connectToDB();
   const users = await User.find({ firstName: { $regex: regex } })
     return  users ;
    } catch (err) {
      console.log(err);
     
    }
  };
  export const fetchProduct = async (q:any) => {
    const regex = new RegExp(q, "i");
     try {
        connectToDB();
       const products = await Product.find({ title: { $regex: regex } })
       
       return  products ;
      } catch (err) {
        console.log(err);
       
      }
    };
    export const fetchCategory = async () => {
       try {
          connectToDB();
          const category = await Allcategory.find()
        return await category 
        } catch (err) {
          console.log(err);
         
        }
      };
      export const fetchClientinformationandcard = async (q:any) => {
        const regex = new RegExp(q, "i");
        let alldata:any=''
        let i:number=0;
         try {
            connectToDB();
           const Cardfeetch = await Card.find()
           for (let index = 0; index < Cardfeetch.length; index++) {
         if(Cardfeetch[index].verifer=='No')i=i+1;
          }
          alldata={Cardfeetch,i}
          return  alldata ;
          } catch (err) {
            console.log(err);
           
          }
        };