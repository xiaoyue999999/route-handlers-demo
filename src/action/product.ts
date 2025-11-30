'use server';

import { addProduct } from '@/prisma-db';
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
