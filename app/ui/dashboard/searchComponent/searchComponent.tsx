'use client'

import { useSearchParams, useRouter } from 'next/navigation';
import styles from './searchComponent.module.css'
import { MdSearch } from "react-icons/md";
import usePathName from '@/app/hooks/pathname';

interface SearchProps {
  placeholder: string;
}

export default function Search({ placeholder }: SearchProps) {
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const pathname = usePathName();

  const handleSearch = (inputValue: any) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", "1");
    if (inputValue.target.value) {
      params.set('q', inputValue.target.value);
    } else {
      params.delete('q')
    }
    replace(`${pathname}?${params}`);
  }

  return (
    <div className={styles.container}>
      <MdSearch/>
      <input 
        type="text" 
        placeholder={placeholder} 
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  )
}
