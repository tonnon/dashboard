import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'
import styles from './rightbar.module.css'
import Image from 'next/image'

export default function Rightbar() {
    return (
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.bgContainer}>
            <Image
              src="/astronaut.png"
              alt='astronaut'
              fill
              className={styles.img}
            />
          </div>
          <div className={styles.text}>
            <span className={styles.notification}>
              🔥 Available Now
            </span>
            <h3 className={styles.title}> 
              How to use the new version of the admin dashboard?
            </h3>
            <span className={styles.subtitle}>
              Takes 4 minutes to learn
            </span>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit eius libero perspiciatis recusandae possimus.
            </p>
            <button className={styles.button}>
              <MdPlayCircleFilled />
              Watch
            </button>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.text}>
            <span className={styles.notification}>
              🚀 Coming Soon
            </span>
            <h3 className={styles.title}>
              New server actions are available, partial pre-rendering is coming
              up!
            </h3>
            <span className={styles.subtitle}>
              Boost your productivity
            </span>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit eius libero perspiciatis recusandae possimus.
            </p>
            <button className={styles.button}>
              <MdReadMore />
              Learn
            </button>
          </div>
        </div>
      </div>
    )
  }
  