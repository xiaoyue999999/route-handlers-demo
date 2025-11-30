import { addProduct } from '@/prisma-db';

export async function POST(request: Request) {
  const body = await request.json();

  const { title, price, description }: { title: string; price: string; description: string } = body;

  const product = await addProduct({ title, price: parseInt(price), description });

  return new Response(JSON.stringify(product), {
    headers: { 'Content-type': 'application/json' },
  });
}
