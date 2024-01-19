export default function category_maybe_liket  (All_data:any,Global_category:any)  {
    const data:any=[];
            let j=0,s=1;
       for (let index = 0; index < All_data.data.length; index++) {
       if (All_data.data[index].Global_category==Global_category) {
               data[j]=All_data.data[index];
               j++
           }}
                  return data;
        };
       