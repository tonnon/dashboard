"use server"

import { revalidatePath } from 'next/cache';
import { User, Product } from './models'
import { connectDB } from './utils'
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { signIn } from "../auth";

export const addUser = async (formData) => {
    const {username, email, password, phone, address, isAdmin, isActive} = Object.fromEntries(formData);

    try {
        connectDB();
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username, email, password: hashPassword, phone, address, isAdmin, isActive
        });

        await newUser.save();
    } catch (err) {
        console.log(err);
        throw new Error('Failed to create user!');
    }
    revalidatePath('/dashboard/users');
    redirect('/dashboard/users');
}

export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } =
      Object.fromEntries(formData);
  
    try {
      connectDB();
  
      const updateFields = {
        username,
        email,
        password,
        phone,
        address,
        isAdmin,
        isActive,
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
  
      await User.findByIdAndUpdate(id, updateFields);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to update user!");
    }
  
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};

  export const deleteUser = async (formData) => {
    const {id} = Object.fromEntries(formData);

    try {
        connectDB();
        await User.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
        throw new Error('Failed to delete user!');
    }
    revalidatePath('/dashboard/users');
}

export const addProduct = async (formData) => {
    const {title, desc, price, stock, color, size} = Object.fromEntries(formData);

    try {
        connectDB();
        const newProduct = new Product({
            title, desc, price, stock, color, size
        });

        await newProduct.save();
    } catch (err) {
        console.log(err);
        throw new Error('Failed to create product!');
    }
    revalidatePath('/dashboard/products');
    redirect('/dashboard/products');
}

export const deleteProduct = async (formData) => {
    const {id} = Object.fromEntries(formData);

    try {
        connectDB();
        await Product.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
        throw new Error('Failed to delete product!');
    }
    revalidatePath('/dashboard/products');
}

export const updateProduct = async (formData) => {
    const { id, title, desc, price, stock, color, size } =
      Object.fromEntries(formData);
  
    try {
      connectDB();
  
      const updateFields = {
        title, 
        desc, 
        price, 
        stock, 
        color, 
        size
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
  
      await Product.findByIdAndUpdate(id, updateFields);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to update product!");
    }
  
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};

export const authenticate = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};  