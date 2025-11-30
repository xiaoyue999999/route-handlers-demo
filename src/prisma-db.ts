// import { PrismaClient } from './generated/prisma/client';
import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient();

const seedProduct = async () => {
  console.log('await prisma.product', await prisma.product);
  
  const count = await prisma.product.count();

  console.log('count', count);

  if (count === 0) {
    await prisma.product.createMany({
      data: [
        {
          title: 'product 1',
          price: 500,
          description: '你好你好',
        },
        {
          title: 'product 2',
          price: 200,
          description: '你好你好',
        },
        {
          title: 'product 3',
          price: 800,
          description: '你好你好',
        },
      ],
    });
  }
};

seedProduct();

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
