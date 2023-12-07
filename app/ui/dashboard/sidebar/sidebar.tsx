
'use client'

import Link from 'next/link'
import Image from 'next/image'

import styles from './sidebar.module.css'
import { 
  MdDashboard, 
  MdSupervisedUserCircle, 
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from 'react-icons/md'
import usePathName from '@/app/hooks/pathname'


const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export default function Sidebar() {
  const pathName = usePathName();

    return (
      <div className={styles.container}>
        <div className={styles.user}>
          <Image className={styles.userImg} src="/noavatar.png" alt="" width="50" height="50"/>
          <div className={styles.userDetail}>
            <span className={styles.userName}>
              John Doe
            </span>
            <span className={styles.userTitle}>
              Administrator
            </span>
          </div>
        </div>
        <ul>
          {menuItems.map((category) => (
            <li key={category.title} className={styles.list}>
              <span className={styles.category}> 
                {category.title}
              </span>
              {category.list.map((link) => (
                <Link href={link.path} key={link.title} className={`${styles.link} ${pathName === link.path && styles.active }`}>
                  {link.icon}
                  {link.title}
                </Link>
              ))}
            </li>
          ))}
        </ul>
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </div>
    )
  }
  