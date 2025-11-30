async function getUserPosts(userId: string) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

  return result.json();
}

async function getUserAlbums(userId: string) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);

  return result.json();
}

export default async function ({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const userPosts: Record<string, any> = getUserPosts(id);
  const userAlbums: Record<string, any> = getUserAlbums(id);

  const [posts, albums] = await Promise.all([userPosts, userAlbums]);

  return (
    <div className="flex">
      <div className="border m-4">
        {posts.map((res: any) => (
          <div key={res.id} className="border m-3">
            <h2>title:{res.title}</h2>
            <span>{res.body}</span>
          </div>
        ))}
      </div>

      <div className="border m-4">
        {albums.map((res: any) => (
          <div key={res.id} className="border m-3">
            <h2>title:{res.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
