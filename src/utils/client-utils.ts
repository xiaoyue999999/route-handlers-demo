import 'client-only'; // 防止把客户端组件引用到服务端中 保持代码分离

export function ClientText () {
  console.log('client');
  return 'client Text';
}