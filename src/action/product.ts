'use server';

import { addProduct, deleteProduct, updateProduct } from '@/prisma-db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

type Error = {
  title?: string;
  price?: string;
  description?: string;
};

export type FormState = {
  errors: Error;
};

export const createProduct = async (preFormDate: any, formData: FormData) => {
  'use server';
  const title = formData.get('title') as string;
  const price = formData.get('price') as string;
  const description = formData.get('description') as string;

  const errors: Error = {};

  if (!title) {
    errors.title = 'title no request';
  }
  if (!price) {
    errors.price = 'price no request';
  }
  if (!description) {
    errors.description = 'description no request';
  }

  if (!!Object.keys(errors)?.length) {
    return { errors };
  }

  await addProduct({ title, price: parseInt(price), description });

  redirect('/product-db');
};

// 操作表单信息
export const editProduct = async (id: number, preFormDate: any, formData: FormData) => {
  'use server';
  const title = formData.get('title') as string;
  const price = formData.get('price') as string;
  const description = formData.get('description') as string;

  const errors: Error = {};

  if (!title) {
    errors.title = 'title no request';
  }
  if (!price) {
    errors.price = 'price no request';
  }
  if (!description) {
    errors.description = 'description no request';
  }

  if (!!Object.keys(errors)?.length) {
    return { errors };
  }

  await updateProduct(id, { title, price: parseInt(price), description });

  redirect('/product-db');
};

// 在表单上删除其中一条
export async function deleteProductForm(id: number) {
  'use server';
  await deleteProduct(id);

  // 删除完毕 删除条目后 重新验证路径
  revalidatePath('/product-db');
}
