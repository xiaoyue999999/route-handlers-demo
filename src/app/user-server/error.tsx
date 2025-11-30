'use client';

import { useEffect } from 'react';

// 处理错误 必须是客户端组件
export default function ErrorPage({ error }: any) {
  useEffect(() => {
    console.error('err', error);
  }, []);
  return <>Error</>;
}
