import { ClientComponentPage } from "./components/client-component-page";
import { ServerComponentPage } from "./components/server-component-page";

// 页面组件
export default function InterleavingPage() {
  return (
    <>
      <h1>InterleavingPage</h1>
      <ClientComponentPage page={<ServerComponentPage />}>
        <ServerComponentPage />
      </ClientComponentPage>
    </>
  );
}