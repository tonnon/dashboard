import styles from './singleProductPage.module.css'
import Image from 'next/image'
import {fetchProduct} from '@/app/lib/data';
import { updateProduct } from '@/app/lib/actions';

interface singleProductPageProps {
    params: any;
}

export default async function singleProductPage({ params }: singleProductPageProps) {
    const {id} = params;
    const product = await fetchProduct(id);
 
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
                {product.title}
            </div>
                <div className={styles.formContainer}>
                    <form action={updateProduct} className={styles.form}>
                        <input type="hidden" name="id" value={product.id} />
                        <label>
                            Title
                        </label>
                        <input 
                            type="text" 
                            name='title'
                            placeholder={product.title}
                        />
                        <label>
                            Price
                        </label>
                        <input 
                            type="number" 
                            name='price'
                            placeholder={product.price}
                        />
                        <label>
                            Stock
                        </label>
                        <input 
                            type="number" 
                            name='stock'
                            placeholder={product.stock}
                        />
                        <label>
                            Color
                        </label>
                        <input 
                            type="text" 
                            name='color'
                            placeholder={product.color}
                        />
                        <label>
                            Size
                        </label>
                        <input 
                            type="text" 
                            name='size'
                            placeholder={product.color}
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
  