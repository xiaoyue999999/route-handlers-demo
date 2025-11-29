// 'use server';
import fs from 'fs';

// import { ClientComponentPage } from "./client-component-page";

// 服务端组件
export function ServerComponentPage() {
  fs.readFileSync('src/app/interleaving/components/server-component-page.tsx', 'utf-8'); // 模拟服务端代码
  return (
    <>
      <h2>ServerPage</h2>
      {/* <ClientComponentPage /> */}
    </>
  );
}