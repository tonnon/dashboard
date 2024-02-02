import styles from '../ui/dashboard/dashboard.module.css'

import Card from '../ui/dashboard/card/card'
import Rightbar from '../ui/dashboard/rightbar/rightbar'
import Transactions from '../ui/dashboard/transactions/transactions'
import Chart from '../ui/dashboard/chart/chart'
import { MdSupervisedUserCircle, MdShoppingBag, MdAttachMoney   } from 'react-icons/md'

let cardDetails = [
  {
    icon: <MdSupervisedUserCircle size={28} />,
    title: 'Total users',
    number: 10.273,
    detail: [
      { 
        positive: 12, 
        text: 'more than previous week', 
      },
    ]
  },
  {
    icon: <MdShoppingBag size={28} />,
    title: 'Sales',
    number: 33.188,
    detail: [
      { 
        positive: 9, 
        text: 'more than previous month', 
      },
    ]
  },
  {
    icon: <MdAttachMoney size={28} />,
    title: 'Impact',
    number: 150.655,
    detail: [
      { 
        positive: 25, 
        text: 'more than previous month', 
      },
    ]
  }
]

export default function Dashboard() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.cards}>
            {cardDetails.map((card) => (
              <Card 
                key={`${card.title}`}
                icon={card.icon}
                title={card.title}
                number={card.number}
                positive={card.detail[0].positive}
                text={card.detail[0].text}
              />
            ))}
          </div>
          <Transactions />
          <Chart/>
        </div>
        <div className={styles.side}>
          <Rightbar/>
        </div>
      </div>
    )
  }
  