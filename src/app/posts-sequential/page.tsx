import { Suspense } from 'react';
import Author from './author';

export default async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts');

  const data: Record<string, any>[] = await result.json();

  const postsFilter = data?.filter((item) => item.id % 10);

  return (
    <>
      {postsFilter?.map((item) => (
        <div key={item.id} className="border m-3">
          <h1>title: {item.title}</h1>
          <h5>body: {item.body}</h5>
          <Suspense fallback={<>Loading...</>}>
            <Author userId={item.userId} />
          </Suspense>
        </div>
      ))}
    </>
  );
};
