import { Suspense } from 'react'
import Loading from './product/Loading'
import ImageDescreption from './ImageDescreption'
import CategoryPopulaire from './CategoryPopulaire';
import Carousel from './carousel/Carousel'
import { fetchProduct } from '@/utile/action/feetchData';
export default async function Home() {  
  const data:any=await fetchProduct('');
  return (
 

    <main>
       <Suspense fallback={<Loading/>}>
     <ImageDescreption data={data}/>
     <h3 style={{paddingLeft:'40%',margin:'25px',textDecoration:' underline'}}> winter</h3>
     <Carousel data={data} category={'oversize'}/>
           <hr />
     <h3 style={{paddingLeft:'40%',margin:'25px',textDecoration:' underline'}}> summer</h3>
     <Carousel data={data} category={'summer'}/>
               <hr />
     <h3 style={{paddingLeft:'40%',margin:'25px',textDecoration:' underline'}}> spring</h3>
     <Carousel data={data} category={'spring'}/>
         
     <hr />
          <h3 style={{paddingLeft:'40%',margin:'25px',textDecoration:' underline'}}> autumn</h3>
     <Carousel data={data} category={'autumn'}/>
     </Suspense>
    </main>

  )
}
// <Carousel data={data}/>