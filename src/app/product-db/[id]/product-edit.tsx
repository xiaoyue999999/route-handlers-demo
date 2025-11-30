'use client';

import { useActionState } from 'react';
import { editProduct, FormState } from '@/action/product';

export default function ProductEdit({ product }: { product: Record<string, any> }) {
  const initialState: FormState = {
    errors: {},
  };

  // 使用bind增加额外参数
  const newEditProduct = editProduct.bind(null, product.id);

  const [state, formAction, isPending] = useActionState(newEditProduct, initialState);

  return (
    <>
      <form action={formAction}>
        <div>
          <label>
            title: <input type="text" name="title" defaultValue={product.title} />
          </label>
          {!!state.errors.title && <p className="text-red-500">{state.errors.title}</p>}
        </div>

        <div>
          <label>
            price: <input type="text" name="price" defaultValue={product.price} />
          </label>
          {!!state.errors.price && <p className="text-red-500">{state.errors.price}</p>}
        </div>

        <div>
          <label>
            description:
            <input type="text" name="description" defaultValue={product.description} />
          </label>
          {!!state.errors.description && <p className="text-red-500">{state.errors.description}</p>}
        </div>

        <button type="submit" disabled={isPending}>
          {isPending ? 'loading...' : 'add'}
        </button>
      </form>
    </>
  );
}
