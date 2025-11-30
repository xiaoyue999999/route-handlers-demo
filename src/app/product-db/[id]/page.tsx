import { getProduct } from '@/prisma-db';
import ProductEdit from './product-edit';
import { notFound } from 'next/navigation';

export default async function ({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = await getProduct(parseInt(id));

  if (!product) {
    return notFound();
  }

  console.log('product', product);
  
  return <ProductEdit product={product} />;
}
