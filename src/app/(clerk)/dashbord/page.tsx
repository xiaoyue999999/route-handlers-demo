import { auth, currentUser } from '@clerk/nextjs/server';
import { Counter } from '../components/Counter';

// 服务端组件获取用户认证信息和当前用户信息
export default async function DashboardPage() {
  const authObj = await auth();
  const currentUserObj = await currentUser();

  console.log({
    authObj,
    currentUserObj,
  });

  return (
    <>
      <h1>Dashboard Page</h1>
      <Counter />
    </>
  );
}
