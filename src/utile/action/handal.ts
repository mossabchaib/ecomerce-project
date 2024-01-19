'use server'
import  {connectToDB}  from "../ConectMongodb";
import   Card  from "../../Models/information_client";
export const color = async (Size:any,color:any) => {
    //console.log("Size:any,color:any:",Size,color)
const data:any=[];
        let j=0,s=1;
    for (let index = 1; index < color.length; index++) {
        s=0;
        for (let i = 0; i < color.length; i++) {
        
         if(color[index].color_Size[i]!=undefined)
       { 
        if (color[index].color_Size[i].colorsp==Size&&color[index].color_Size[i].numbersp!=0) {
            let t=0;
            for (let r = 0; r < data.length; r++) {
                if(data[r]==color[index].color)t=1;
            }
         if(t==0)   data[j]=color[index].color;j++
        }}
 }
    }
   return data;
    };
    export const Detelse = async () => {
        let data:any='';
        let all_price:number=0;
        let all_Castuemer:number=0;
        try {
            connectToDB();
           const Cardfeetch = await Card.find()
          for (let index = 0; index < Cardfeetch.length; index++) {
     all_price=Cardfeetch[index].priceTotle+all_price
            }
            all_Castuemer=Cardfeetch.length;
            data={all_price,all_Castuemer}
            return data;
        }catch (err) {
            console.log(err);
           
          }
              
                      return data;
            };
                    export const Recent_Orders = async () => {
                        let data:any=[];
                        let j=0
                        try {
                            connectToDB();
                           const Cardfeetch = await Card.find()
                          for (let index = 0; index < Cardfeetch.length; index++) {
                   if(Cardfeetch[index].Recent_Orders=='yes'){
data[j]=Cardfeetch[index];
                j++;   
                }
                            }
                            return data;
                        }catch (err) {
                            console.log(err);
                           
                          }
                              
                                      return data;
                            };
                            export const Cart = async (cart:any,newcart:any) => {
                                console.log('=====================',cart);
                                const data:any=[];
                                        let j=0,s=1;
                                //     for (let index = 1; index < color.length; index++) {
                                //         s=0;
                                //         for (let i = 0; i < color.length; i++) {
                                        
                                //          if(color[index].color_Size[i]!=undefined)
                                //        { 
                                //         if (color[index].color_Size[i].colorsp==Size&&color[index].color_Size[i].numbersp!=0) {
                                //             data[j]=color[index].color;j++
                                //         }}
                                //  }
                                //     }
                                   return data;
                                    };