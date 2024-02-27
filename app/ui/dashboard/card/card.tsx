import styles from './card.module.css'
import { ReactNode } from 'react'

interface CardProps {
  icon: ReactNode,
  title: string,
  number: number, 
  positive: number,
  text: string,
  
}
export default function Card({
  icon, 
  title, 
  number, 
  positive, 
  text,
}:CardProps) {
    return (
      <div   className={styles.container}>
        <div className={styles.texts}>
          <span className={styles.title}>
            {icon}
            {title}
          </span>
          <span className={styles.number}>
            {number}
          </span>
          <span className={styles.detail}>
            <span className={styles.positive}>{positive}%</span> {text}
          </span>
        </div>
      </div>
    )
  }
  