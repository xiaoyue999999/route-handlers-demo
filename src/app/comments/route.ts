import { comments } from "./data";

// 查询所有
// http://localhost:3000/comments
export async function GET() {
  return Response.json(comments);
}

// http://localhost:3000/comments
// {
//   "text": "1 大家好"
// }
// 增加一条评论
export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: `c${comments.length + 1}`,
    text: comment.text,
  };
  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}



