import { addProduct } from '@/prisma-db';
import { redirect } from 'next/navigation';
import { Submit } from './components/submit';

export default function () {
  const createProduct = async (formData: FormData) => {
    'use server';
    const title = formData.get('title') as string;
    const price = formData.get('price') as string;
    const description = formData.get('description') as string;

    await addProduct({ title, price: parseInt(price), description });

    redirect('/product-db');
  };

  return (
    <>
      <form action={createProduct}>
        <label>
          title: <input type="text" name="title" />
        </label>
        <br />

        <label>
          price: <input type="text" name="price" />
        </label>
        <br />

        <label>
          description:
          <input type="text" name="description" />
        </label>

        <br />
        <Submit />
      </form>
    </>
  );
}
