import { PrismaClient } from './generated/prisma/client';
// import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function demo() {
  console.log('demo');
}

demo();

const seedProducts = async () => {
  console.log('12123', prisma);

  const count = await prisma.product.count();
  if (count === 0) {
    await prisma.product.createMany({
      data: [
        { title: 'Product 1', price: 500, description: 'Description 1' },
        { title: 'Product 2', price: 700, description: 'Description 2' },
        { title: 'Product 3', price: 1000, description: 'Description 3' },
      ],
    });
  }
};

seedProducts();

// 调用方法
// 获取数据

export async function getProducts(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.product.findMany({
      where: {
        OR: [{ title: { contains: query } }, { description: { contains: query } }],
      },
    });
  }
  return prisma.product.findMany();
}

// 获取指定条目
export async function getProduct(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.findUnique({
    where: { id },
  });
}

// 增加一条数据
export async function addProduct(params: { title: string; price: number; description: string }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return prisma.product.create({
    data: params,
  });
}

// 修改一条数据
export async function updateProduct(
  id: number,
  params: { title: string; price: number; description: string }
) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return prisma.product.update({
    where: { id },
    data: params,
  });
}

// 删除指定条目
export async function deleteProduct(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.delete({
    where: { id },
  });
}
