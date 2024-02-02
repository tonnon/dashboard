'use client'

import usePathName from '@/app/hooks/pathname';
import styles from './navbar.module.css'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md';
import Search from '../searchComponent/searchComponent';
export default function Navbar() {
  const pathName = usePathName();
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          {pathName.split('/').pop()}
        </div>
        <div className={styles.menu}>
          <div className={styles.search}>
            <Search
              placeholder='Search'
            />
          </div>
          <div className={styles.icons}>
            <MdOutlineChat size={20} />
            <MdNotifications size={20} />
            <MdPublic size={20} />
          </div>
        </div>
      </div>
    )
  }
  