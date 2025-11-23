import { comments } from "../data";
import { NextResponse } from 'next/server';

// 精确查询
// http://localhost:3000/comments/:id
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((c) => c.id === id);

  if (comment) {
    return Response.json(comment);
  } else {
    return new Response("Comment not found", { status: 500 });
  }
}

// 更新一条评论
// http://localhost:3000/comments/:id
export async function POST (response: any, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const { text } = await response.json() || {};
    const commentIndex = comments.findIndex((c) => c.id === id);

    // 错误判断处理
    if (commentIndex === -1) {
        return new Response("Comment not found", { status: 500 });
    }

    comments[commentIndex].text = text;
    return Response.json(comments[commentIndex]);
}

// 删除其中一条
export async function DELETE(response: any, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const commentIndex = comments.findIndex((c) => c.id === id);

    const deleteComment = comments[commentIndex];

    // 错误判断处理
    if (!deleteComment) {
        return new Response("Comment not found", { status: 500 });
    }

    comments.splice(commentIndex, 1);
    return Response.json(deleteComment);
}
