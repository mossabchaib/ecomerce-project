'use client'
import { usePathname } from 'next/navigation'
export  function Path(pahtreturn:any) {
    const path=usePathname()
    let ind='';
    let index;
    let first;
    let finish;
    
    if(pahtreturn==1){
    for ( index = 18; path[index] !='_' ; index++) {
     ind+=path[index]
     }
    return ind;
  }
else if(pahtreturn==2){
     for ( index=19; index <path.length ; index++) {
      if(path[index]=='_') first=index+1;
      else if(path[index]=='-') {finish=index;break}
     }
     return path.slice(first,finish);
    }
     else  if(pahtreturn==3){
      for ( index=20; index <path.length ; index++) {
        if(path[index]=='-'){ first=index+1;break}
       }
       return path.slice(first,path.length);
     }
}
