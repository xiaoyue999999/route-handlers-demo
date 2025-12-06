import { getProducts } from '@/prisma-db';
import { ProductDetails } from './product-details';

export default async function ProductDBPage() {
  const products = await getProducts();

  return <ProductDetails products={products} />;
}
