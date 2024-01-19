'use server'
;import   Card  from "../../Models/information_client";
import   Users  from "../../Models/Users";
import product from "@/Models/Products";
import  {connectToDB}  from "../ConectMongodb";
import Allcategory from "@/Models/category";
export const updateProduct = async (formData:any,image:any,color:any,pointure:any,size:any,category:any) => {
    const id=formData.id;
    const title=formData.title;
    const price=formData.price;
    const description=formData.description;
    const stock=formData.Stock;
    const Global_category=formData.Global_category;
     try {
        connectToDB();
        console.log('heeee:',category)
        const updateFields = {title,price,description,stock,Global_category,category,image,color,pointure,size };
        console.log("========================================",updateFields,id)
          await product.findByIdAndUpdate(id,updateFields);
      } catch (err) {
        console.log(err);
     }
    };
    export const findProduct = async (formData:any) => {
      const id=formData.id;
     
       try {
          connectToDB();
         
          const productFind:any=  await product.findById(id);
            return productFind;
        } catch (err) {
          console.log(err);
       }
      };
      export const updateCategory = async (newGlobal_categorys:any,new_categorys:any) => {
        const  Global_category='';
        const categorys:any=[];
        const all:any=[]
        const allData={Global_category:Global_category,categorys:categorys}
         try {
            connectToDB();
            const category=await Allcategory.findOne({Global_category:newGlobal_categorys});
           allData.Global_category=category.Global_category;
          const _id=category._id;
           let t:any=0;let c:any=0;
           for (let j = 1; j < new_categorys[0].length; j++) {
            t=0;
            const compare=new_categorys[0][j];
           for (let index = 0; index < category.categorys.length; index++) {
            if(compare==category.categorys[index])t=1;
           }
           if(t==0){allData.categorys[c]=compare;;c++;}
          }
          if(allData.categorys.length!=0){
            let j=0;let v=allData.categorys.length;
          for (let index = allData.categorys.length; index <category.categorys.length+v ; index++) {
 allData.categorys[index]=category.categorys[j];j++;
          }
          await Allcategory.findByIdAndUpdate(_id,allData);}
          } catch (err) {
            console.log(err);
         }
        };
        //==================================================================================
        export const updateuser = async (id:any,user:any) => {
                   try {
              connectToDB();
              await Users.findByIdAndUpdate(id,user);
             const userapdate= await Users.findById(id);
             return userapdate;
            } catch (err) {
              console.log(err);
           }
          };
          export const updateinformation_shopinig_client = async (id:any,verify:any,Recent:any) => {
            console.log('=======================================================================================data',id,verify,Recent)
            try {
       connectToDB();
     const info=  await Card.findById(id);
     info.verifer=verify;
     info.Recent_Orders=Recent;
     await Card.findByIdAndUpdate(id,info);
    //  console.log('=======================================================================================',dd)
     } catch (err) {
       console.log(err);
    }
   };
   export const updateuserCat = async (id:any,user:any,user_c:any) => {
         
          
    for (let index = 0; index < user.length; index++) {
      let t=0;
      for (let i = 0; i < user_c.category_interiser.length; i++) {
        if (user[index].id[0].Global_category==user_c.category_interiser[i]) {
         t=1;
        }
        
       }
     if(t==0)user_c.category_interiser.push(user[index].id[0].Global_category);
    }
              try {
         connectToDB();
         await Users.findByIdAndUpdate(id,user_c);
      const userapdate= await Users.findById(id);
        return userapdate; 
       } catch (err) {
         console.log(err);
      }
    };