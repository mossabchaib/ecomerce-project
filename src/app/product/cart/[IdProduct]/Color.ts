export default function color  (Size:any,color:any)  {
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