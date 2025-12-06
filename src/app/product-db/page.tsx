import { getProducts } from '@/prisma-db';
import { ProductDetails } from './product-details';

export default async function ProductDBPage({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const { query } = await searchParams;

  const products = await getProducts(query);

  return <ProductDetails products={products} />;
}
