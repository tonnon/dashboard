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
import { auth, signOut } from '@/app/auth';
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

interface SideBarProps {
  username: string;
}

export default async function Sidebar() {
  const authResult = await auth();
  let userAuth: SideBarProps | undefined;
  if (authResult && authResult.user && 'username' in authResult.user) {
    const username = authResult.user.username as string;
    userAuth = {
      username: username,
    };
  } else {
    userAuth = undefined;
  }

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImg} src="/noavatar.png" alt="" width="50" height="50"/>
        <div className={styles.userDetail}>
          <span className={styles.userName}>
            {userAuth?.username}
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
      <form action={async () => {
        "use server"
        await signOut();
      }}>
        <button type="submit" className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form> 
    </div>
  );
}
