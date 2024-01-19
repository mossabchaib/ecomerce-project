
'use client'
import input from '../app/product/cart/input.module.css'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const SearchInput = () => {
  const searchParams = useSearchParams();
  const router= useRouter();
  const pathname = usePathname();
  const handleSearch = (e:any) => {

    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      e.target.value.length > 1 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    router.replace(`${pathname}?${params}`);
  };
  return (
    
    <div className={input.containar}>
<div className={input.searsh}>   

<input

        type="text"
        onChange={handleSearch}
        className={input.input} placeholder="Search"
      />
</div>
<div style={{marginTop:'50px'}}>

</div>
  </div>  
  );
};

export default SearchInput;
