import { getProducts } from '@/prisma-db';

export default async function ProductDBPage() {
  const products = await getProducts();

  return (
    <>
      <div>
        {products.map((res: any) => (
          <div key={res.id} className="border m-3">
            <h2>{res.title}</h2>
            <h3>{res.price}</h3>
            <div>{res.description}</div>
          </div>
        ))}
      </div>
    </>
  );
}
