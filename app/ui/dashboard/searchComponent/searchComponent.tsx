import styles from './searchComponent.module.css'
import { MdSearch } from "react-icons/md";

interface SearchProps {
  placeholder: string;
}

export default function Search({ placeholder }: SearchProps) {
  return (
    <div className={styles.container}>
      <MdSearch/>
      <input 
        type="text" 
        placeholder={placeholder} 
        className={styles.input}
      />
    </div>
  )
}
