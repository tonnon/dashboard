import { addUser } from '@/app/lib/actions'
import styles from './addUser.module.css'

export default function AddUserPage() {
  return (
    <div className={styles.container}>
        <form action={addUser} className={styles.form}>
          <input 
            type="text" 
            placeholder='username'
            name='username'
            required
          />
          <input 
            type="email" 
            placeholder='email'
            name='email'
            required
          />
          <input 
            type="password" 
            placeholder='password'
            name='password'
            required
          />
          <input 
            type="phone" 
            placeholder='phone'
            name='phone'
          />
          <select name="isAdmin" id="isAdmin">
            <option value={String(false)} selected>
              Is Admin?
            </option>
            <option value={String(true)}>
              Yes
            </option>
            <option value={String(false)}>
              No
            </option>
          </select>
          <select name="isActive" id="isActive">
            <option value={String(true)} selected>
              Is Active?
            </option>
            <option value={String(true)}>
              Yes
            </option>
            <option value={String(false)}>
              No
            </option>
          </select>
          <textarea 
            name="address" 
            id="address" 
            rows={16}
            placeholder='Address'
          />
          <button type='submit'>
            Submit
          </button>
        </form>
    </div>
  );
}
