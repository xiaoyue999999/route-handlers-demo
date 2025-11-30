'use client';

import { Submit } from './components/submit';
import { useActionState } from 'react';
import { createProduct, FormState } from '@/action/product';

export default function () {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(createProduct, initialState);

  return (
    <>
      <form action={formAction}>
        <div>
          <label>
            title: <input type="text" name="title" />
          </label>
          {!!state.errors.title && <p className="text-red-500">{state.errors.title}</p>}
        </div>

        <div>
          <label>
            price: <input type="text" name="price" />
          </label>
          {!!state.errors.price && <p className="text-red-500">{state.errors.price}</p>}
        </div>

        <div>
          <label>
            description:
            <input type="text" name="description" />
          </label>
          {!!state.errors.description && <p className="text-red-500">{state.errors.description}</p>}
        </div>

        {/* <Submit /> */}
        <button type="submit" disabled={isPending}>
          {isPending ? 'loading...' : 'add'}
        </button>
      </form>
    </>
  );
}
