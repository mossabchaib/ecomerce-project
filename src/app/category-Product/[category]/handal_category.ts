export default function handal_Category  (category:any,data:any) {
    const categoryChoice:any=[]
      let j=0;
   
        for (let index = 0; index <data.length; index++) { 
           for (let i = 1; i <data[index].category[0].length; i++) {
           if(data[index].category[0][i]===category){
     categoryChoice[j]=data[index];j++
           }
           }}
         return  categoryChoice ;
    
     
   }
    