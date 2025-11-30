'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ReactFormPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await fetch('/react-form/api', {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          title,
          price,
          description,
        }),
      });

      if (result.ok) {
        router.push('/product-db');
      }
      setLoading(false);
    } catch (err) {
      console.log('err', err);
    } finally {
      setLoading(false);
    }
  };

  // if (loading) return <div>Loading...</div>

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          title: <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />{' '}
          {title}
        </label>
        <br />

        <label>
          price: <input type="text" name="price" onChange={(e) => setPrice(e.target.value)} />{' '}
          {title}
        </label>
        <br />

        <label>
          description:
          <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} />
        </label>

        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'loading...' : '提交'}
        </button>
      </form>
    </>
  );
}
