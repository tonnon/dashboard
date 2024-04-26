import { authenticate } from '../lib/actions'
import styles from './login.module.css'

export default function Login() {
    return (
      <div className={styles.container}>
        <form action={authenticate} className={styles.form}>
          <h1>
            Login
          </h1>
          <input 
            type="text" 
            name="username" 
            id="username"
            placeholder='username'
          />
          <input 
            type="password" 
            name="password" 
            id="password"
            placeholder='password' 
          />
          <button>
            Login
          </button>
        </form>
      </div>
    )
  }
  