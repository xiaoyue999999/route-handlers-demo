export default async function Author({ userId }: { userId: string }) {
  // userId
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const userInfo = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

  const user: { name: string } = await userInfo.json();

  return <>usename: {user.name}</>;
}
