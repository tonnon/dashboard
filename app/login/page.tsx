'use client'
import { useState } from 'react';
import { authenticate } from '../lib/actions'
import styles from './login.module.css'


export default function Login() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    try {
      const result = await authenticate(formData);
    } catch (err) {
      setErrorMessage('Wrong credentials!');
    }
  };

    return (
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
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
  