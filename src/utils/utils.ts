import 'server-only'; // 防止把服务端组件引用到客户端中 保持代码分离

export function ServerSideText () {
  console.log('ServerSideText');
  return 'ServerSideText';
}