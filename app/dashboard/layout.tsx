import styles from '../ui/dashboard/dashboard.module.css'

import { ReactNode } from "react";
import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";


interface LayoutProps {
    children: ReactNode;
}
export default function Layout({children}: LayoutProps) {
  
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar/>
            </div>
            <div className={styles.content}>
                <Navbar/>
                {children}
            </div>
        </div>
    )
  }
  