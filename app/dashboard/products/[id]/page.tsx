import styles from './singleProductPage.module.css'
import Image from 'next/image'
export default function singleProductPage() {
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
                Iphone
            </div>
                <div className={styles.formContainer}>
                    <form action="" className={styles.form}>
                        <label>
                            Title
                        </label>
                        <input 
                            type="text" 
                            name='title'
                            placeholder='John Doe'
                        />
                        <label>
                            Price
                        </label>
                        <input 
                            type="number" 
                            name='price'
                            placeholder='JohnDoe@gmail.com'
                        />
                        <label>
                            Stock
                        </label>
                        <input 
                            type="number" 
                            name='stock'
                            placeholder='23'
                        />
                        <label>
                            Color
                        </label>
                        <input 
                            type="text" 
                            name='color'
                            placeholder='white'
                        />
                        <label>
                            Size
                        </label>
                        <input 
                            type="text" 
                            name='size'
                            placeholder='white'
                        />
                        <label>
                            Category
                        </label>
                        <select name="category" id="category">
                            <option value="kitchen">
                                Kitchen
                            </option>
                            <option value="computers">
                                Computers
                            </option>
                        </select>
                        <label>
                            Description
                        </label>
                        <textarea 
                            name="description" 
                            id="description"
                            rows={10}
                            placeholder='Description'
                        />
                    <button type='submit'>
                        Upadate
                    </button>
                </form>
            </div>
        </div>
      );
  }
  