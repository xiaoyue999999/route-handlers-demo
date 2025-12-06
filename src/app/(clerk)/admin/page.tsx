import { clerkClient } from '@clerk/nextjs/server';
import { deleteRole, setRole } from './action';

export default async function AdminPage() {
  const client = await clerkClient();

  const uers = (
    await client.users.getUserList({
      limit: 100,
    })
  )?.data;

  return (
    <div>
      {uers?.map((res: any) => {
        const role = (res.publicMetadata as any)?.role;
        return (
          <div
            key={res.id}
            style={{
              borderBottom: '1px solid #ccc',
              marginBottom: '20px',
              paddingBottom: '20px',
            }}
          >
            <div>ID: {res.id}</div>
            <div>邮箱: {res.emailAddresses[0]?.emailAddress}</div>
            <div>角色: {role || '无'}</div>
            <form action={role ? 'deleteRole' : 'setRole'} style={{ marginTop: '10px' }}>
              <input type="hidden" name="id" value={res.id} />
              {!role && (
                <select name="role">
                  <option value="admin">管理员</option>
                  <option value="editor">编辑</option>
                  <option value="user">用户</option>
                </select>
              )}
            </form>

            <form action={deleteRole}>
              <input type="hidden" value={res.id} name="id" />
              <button type="submit" style={{ marginLeft: '10px' }}>
                del admin
              </button>
            </form>

            <form action={setRole}>
              <input type="hidden" value={res.id} name="id" />
              <input type="hidden" value="admin" name="role" />
              <button type="submit" style={{ marginLeft: '10px' }}>
                set admin
              </button>
            </form>
          </div>
        );
      })}
    </div>
  );
}
