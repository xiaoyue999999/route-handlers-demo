import { NextRequest, NextResponse } from 'next/server';

// middleware 这个文件名称已经失效 改为 proxy

// 全局中间件示例
// 可以拦截路由的走向
export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  const name = request.cookies.get('name');

  // console.log('name', name);

  response.cookies.set('jack', 'nihao');

  if (!name) {
    // 如果没有 name cookie 就设置一个
    response.cookies.set('name', 'xiaoyue');
  }

    // console.log('request.nextUrl.pathname', request.nextUrl.pathname);
    // if (["/"].includes(request.nextUrl.pathname)) {
    //   return NextResponse.redirect(new URL("/hello", request.url));
    // }

  // 必须要有返回值内容
  return response;

  // 把请求重定向到指定路由
  // 全部的路由 都会被重定向到首页
  // return NextResponse.redirect(new URL("/", request.url));

  // 只拦截特定路由 hello 的请求 全部被定向首页
  //   if (request.nextUrl.pathname === "/hello") {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
}
