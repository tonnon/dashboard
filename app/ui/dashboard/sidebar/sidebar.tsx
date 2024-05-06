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
import MenuLink from './menuLink/menuLink';

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
        path: "",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export default async function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImg} src="/noavatar.png" alt="" width="50" height="50"/>
        <div className={styles.userDetail}>
          <span className={styles.userName}>
            Admin
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
            {category.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form action=''>
        <button type="submit" className={styles.logout} disabled>
          <MdLogout />
          Logout
        </button>
      </form> 
    </div>
  );
}
