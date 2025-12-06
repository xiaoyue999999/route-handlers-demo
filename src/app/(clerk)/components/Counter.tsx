'use client';

import { useAuth, useUser } from '@clerk/nextjs';
import { useState } from 'react';

// useAuth组件获取用户认证信息
// useUser 当前用户信息
export function Counter() {
  const [count, setCount] = useState(0);
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  //   const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !userId) {
    return null;
  }

  return (
    <>
      <h1>count: {count}</h1>
      <h1>Counter Component</h1>
    </>
  );
}
