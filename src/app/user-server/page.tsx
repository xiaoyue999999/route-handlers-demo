// 服务端组件调用接口 不需要使用麻烦的状态来维护
export default async function UserServer() {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve('');
    }, 2000)
  );
  const result = await fetch(`https://jsonplaceholder.typicode.com/users?t=${Date.now()}`);

  const userInfo = await result.json();

  return (
    <>
      {userInfo.map(
        (res: { id: string; name: string; phone: string; username: string; website: string }) => (
          <div className="m-3 border" key={res.id}>
            <div>{res.name}</div>
            <div>{res.phone}</div>
            <div>{res.username}</div>
            <div>{res.website}</div>
          </div>
        )
      )}
    </>
  );
}
