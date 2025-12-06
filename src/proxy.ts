/**
 * 下面是学习使用的中间件代码示例
 */
// import { NextRequest, NextResponse } from 'next/server';

// middleware 这个文件名称已经失效 改为 proxy

// 全局中间件示例
// 可以拦截路由的走向
// export function proxy(request: NextRequest) {
//   const response = NextResponse.next();

//   const name = request.cookies.get('name');

//   // console.log('name', name);

//   response.cookies.set('jack', 'nihao');

//   if (!name) {
//     // 如果没有 name cookie 就设置一个
//     response.cookies.set('name', 'xiaoyue');
//   }

//     // console.log('request.nextUrl.pathname', request.nextUrl.pathname);
//     // if (["/"].includes(request.nextUrl.pathname)) {
//     //   return NextResponse.redirect(new URL("/hello", request.url));
//     // }

//   // 必须要有返回值内容
//   return response;

//   // 把请求重定向到指定路由
//   // 全部的路由 都会被重定向到首页
//   // return NextResponse.redirect(new URL("/", request.url));

//   // 只拦截特定路由 hello 的请求 全部被定向首页
//   //   if (request.nextUrl.pathname === "/hello") {
//   //     return NextResponse.redirect(new URL("/", request.url));
//   //   }
// }

/**
 * next一般情况下使用中间件来做一些权限校验之类的功能
 */
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// 只是用来匹配公开路由的
const isPublicRoute = createRouteMatcher(['/', '/dashbord', '/sign-in(.*)?', '/sign-up(.*)?']);

const isAdmin = createRouteMatcher(['/admin(.*)?']);

export default clerkMiddleware(async (auto, req) => {
  const { userId, redirectToSignIn } = await auto();

  // 管理员保护路由
  const autoAuthSessionClaims = (await auto()).sessionClaims as any;
  if (isAdmin(req) && autoAuthSessionClaims?.metadata?.role !== 'admin') {
    const url = new URL('/', req.url);

    return NextResponse.redirect(url);
  }

  // 退出状态下 需要保护路由
  if (!userId && !isPublicRoute(req)) {
    // allow access to public routes
    return redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
