import styles from './singleUserPage.module.css'
import Image from 'next/image'
export default function SingleUserPage() {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image 
                        src="/noavatar.png"
                        alt="user image" 
                        fill
                    />
                </div>
                John Doe
            </div>
                <div className={styles.formContainer}>
                    <form action="" className={styles.form}>
                        <label>
                            Username
                        </label>
                        <input 
                            type="text" 
                            name='username'
                            placeholder='John Doe'
                        />
                        <label>
                            Email
                        </label>
                        <input 
                            type="email" 
                            name='email'
                            placeholder='JohnDoe@gmail.com'
                        />
                        <label>
                            Password
                        </label>
                        <input 
                            type="password" 
                            name='password'
                        />
                        <label>
                            Phone
                        </label>
                        <input 
                            type="phone" 
                            name='phone'
                            placeholder='+112345123'
                        />
                        <label>
                            Address
                        </label>
                        <textarea 
                            name='address'
                            placeholder='New York'
                        />
                        <label>
                            Is Admin?
                        </label>
                        <select name="isAdmin" id="isAdmin">
                            <option value={String(true)}>
                                Yes
                            </option>
                            <option value={String(false)}>
                                No
                            </option>
                        </select>
                        <label>
                            Is Active?
                        </label>
                        <select name="isActive" id="isActive">
                            <option value={String(true)}>
                                Yes
                            </option>
                            <option value={String(false)}>
                                No
                            </option>
                    </select>
                    <button type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
      );
  }
  