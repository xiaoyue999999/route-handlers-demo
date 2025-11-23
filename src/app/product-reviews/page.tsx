import { Suspense } from 'react';
import { Product } from '@/app/product-reviews/components/product';
import { Reviews } from '@/app/product-reviews/components/reviews';

export default async function ProductReviews() {
  return <div>
    <h1>ProductReviews</h1>
    <Suspense fallback={'Product loading ...'}>
      <Product />
    </Suspense>

    <Suspense fallback={'Reviews loading ...'}>
      <Reviews />
    </Suspense>
  </div>
}