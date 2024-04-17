import { fetchUser } from '@/app/lib/data';
import styles from './singleUserPage.module.css'
import Image from 'next/image'
import {updateUser} from '@/app/lib/actions';

interface SingleUserPageProps {
    params: any;
}

export default async function SingleUserPage({ params }: SingleUserPageProps) {
    const {id} = params;
    const user = await fetchUser(id);

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image 
                        src={user.img || "/noavatar.png"}
                        alt="user image" 
                        fill
                    />
                </div>
                {user.username}
            </div>
                <div className={styles.formContainer}>
                    <form action={updateUser} className={styles.form}>
                        <input type="hidden" name="id" value={user.id}/>
                        <label>
                            Username
                        </label>
                        <input 
                            type="text" 
                            name='username'
                            placeholder={user.username}
                        />
                        <label>
                            Email
                        </label>
                        <input 
                            type="email" 
                            name='email'
                            placeholder={user.email}
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
                            placeholder={user.phone}
                        />
                        <label>
                            Address
                        </label>
                        <textarea 
                            name='address'
                            placeholder={user.address}
                        />
                        <label>
                            Is Admin?
                        </label>
                        <select name="isAdmin" id="isAdmin">
                            <option value={String(true)} selected={user.idAdmin}>
                                Yes
                            </option>
                            <option value={String(false)} selected={!user.idAdmin}>
                                No
                            </option>
                        </select>
                        <label>
                            Is Active?
                        </label>
                        <select name="isActive" id="isActive">
                            <option value={String(true)} selected={user.isActive}>
                                Yes
                            </option>
                            <option value={String(false)} selected={!user.isActive}>
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
  