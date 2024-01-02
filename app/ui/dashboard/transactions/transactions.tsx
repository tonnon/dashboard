import styles from './transactions.module.css';
import Image from 'next/image';

let transactionDetails = {
  titles: ['Name', 'Status', 'Date', 'Amount'],
  details: [
    {
      userName: 'Milla Venture', 
      userImage: '/noavatar.png',
      status: 'Done',
      date: '02/01/2024',
      amount: '$3.200'
    },
    {
      userName: 'Marvin Kolvich', 
      userImage: '/noavatar.png',
      status: 'Pending',
      date: '02/04/2024',
      amount: '$3.500'
    },
    {
      userName: 'Luanna Saint', 
      userImage: '/noavatar.png',
      status: 'Cancelled',
      date: '02/05/2024',
      amount: '$3.600'
    },
  ]
}

export default function Transactions() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Latest Transactions
      </h2>
      <table className={styles.table}>
        <thead>
          <tr>
            {transactionDetails.titles.map((title, index) => (
              <td key={index}>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactionDetails.details.map((detail, index) => (
            <tr key={index}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={detail.userImage}
                    alt='user image'
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {detail.userName}
              </div>
              </td>
               <td>
                <span className={`${styles.status} ${styles[detail.status.toLowerCase()]}`}>
                  {detail.status}
                </span>
              </td>
              <td>
                {detail.date}
              </td>
              <td>
                {detail.amount}
              </td> 
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
