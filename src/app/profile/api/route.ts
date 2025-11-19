import { headers, cookies } from "next/headers";
import { type NextRequest } from "next/server";

// 获取请求头中的信息
export async function GET(request: NextRequest) {
  // 通用的获取请求头的方法
  const reqHeaders = new Headers(request.headers);
  console.log("reqHeaders", reqHeaders.get("name"));

  // next中内置的 获取请求头中的信息 === 常用
  const headersList = await headers();
  console.log("headersList", headersList.get("name"));

  // 通用获取cookie的方法
  const cookieHeader = reqHeaders.get("name") || "";
  console.log("cookieHeader", cookieHeader); // cookieHeader xiaoyue

  const cookieAll = reqHeaders.get("cookie") || "";
  console.log("cookieAll", cookieAll); // name=xiaoyue

  const cookieName = request.cookies.get("name") || "";
  console.log("cookieName", cookieName); // cookieName { name: 'name', value: 'xiaoyue' }

  // next内置的获取cookie的方法 === 常用
  const cookieStore = await cookies();
  cookieStore.set("age", "20");
  console.log("cookieStore", cookieStore.get('age'));// cookieStore { name: 'age', value: '20', path: '/' }

  return new Response("<h1>profile route</h1>", {
    headers: { "Content-Type": "text/html", "Set-Cookie": "name=xiaoyue" },
  });
}
