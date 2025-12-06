'use client';

import { deleteProductForm } from '@/action/product';
import { useOptimistic } from 'react';

export function ProductDetails({ products }: { products: any[] }) {
  // 乐观函数 这个方法可以当作被劫持的状态更新函数
  const [optimisticProduct, setOptimisticProduct] = useOptimistic(products, (prev, next) => {
    // 只是把删除的逻辑放在了这里 实际删除还是调用方法
    return prev.filter((p) => p.id !== next);
  });

  const handleProductDeletion = async (id: number) => {
    setOptimisticProduct(id);
    await deleteProductForm(id);
  };

  return (
    <>
      <div>
        {optimisticProduct.map((res: any) => (
          <div key={res.id} className="border m-3">
            <h2>{res.title}</h2>
            <h3>{res.price}</h3>
            <div>{res.description}</div>

            <form action={handleProductDeletion.bind(null, res.id)}>
              <button>删除</button>
            </form>
          </div>
        ))}
      </div>
    </>
  );
}
