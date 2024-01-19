"use client";

import { MdSearch } from "react-icons/md";
import styles from "./searsh.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const Search = () => {
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
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder='searsh '
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;