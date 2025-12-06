'use server';

import { auth, clerkClient } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';

// 修改角色
export async function setRole(formData: FormData) {
  // 首先需要获取当前用户是不是管理员
  const { sessionClaims } = (await auth()) as any;

  if (!['admin'].includes(sessionClaims?.metadata?.role)) {
    throw new Error('只有管理员才能设置角色');
  }

  const client = await clerkClient();
  const id = formData.get('id') as string;
  const role = formData.get('role') as string;

  try {
    await client.users.updateUserMetadata(id, {
      publicMetadata: { role },
    });

    revalidatePath('/admin');
  } catch (error) {
    throw new Error('设置角色失败');
  }
}

// 删除角色
export async function deleteRole(formData: FormData) {
  // 首先需要获取当前用户是不是管理员
  const { sessionClaims } = (await auth()) as any;

  if (!['admin'].includes(sessionClaims?.metadata?.role)) {
    throw new Error('只有管理员才能设置角色');
  }

  const client = await clerkClient();
  const id = formData.get('id') as string;

  try {
    await client.users.updateUserMetadata(id, {
      publicMetadata: { role: null },
    });

    // 删除缓存
    revalidatePath('/admin');
  } catch (error) {
    throw new Error('设置角色失败');
  }
}
