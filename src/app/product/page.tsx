import Cart from './cart/Cart'
import { Suspense } from 'react'
import Loading from './Loading'
import { fetchProduct } from '@/utile/action/feetchData';

export default async function page({searchParams}:any) {

  const q:any = searchParams?.q || "";
  const data:any=await fetchProduct(q);
  return (
    <div>

      <Suspense fallback={<Loading/>}>
     <Cart data={data}/> 
     </Suspense>

    </div>
  )
}
