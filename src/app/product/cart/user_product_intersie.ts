import React from 'react'

export default function user_product_intersie(All_products:any,intersie:any) {
console.log("All_products:any,intersie:any:",All_products,intersie)
const All_product_intersie_user:any=[];
let i=0;
for (let index = 0; index < All_products.length; index++) {
   if (intersie[index]&&intersie[index]==All_products[index].Global_category) {
All_product_intersie_user[i]=All_products[index];
i++;
   }
    
}
return All_product_intersie_user
}
