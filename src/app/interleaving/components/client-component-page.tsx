'use client';

// 客户端组件
export function ClientComponentPage({ children, page }: { children: React.ReactNode; page: React.ReactNode }) {
  return (
    <>
      <h2>ClientPage</h2>
      {children}
      {page}
    </>
  );
}