'use client'
import { useState } from 'react';
import styles from './login.module.css'


export default function Login() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

    return (
      <div className={styles.container}>
        <form action='' className={styles.form}>
          <h2>Dashboard</h2>
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
          {errorMessage && <p>{errorMessage}</p>}
        </form>
      </div>
    )
  }
  