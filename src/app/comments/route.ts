import { NextRequest } from "next/server";
import { comments } from "./data";

// 查询所有
// http://localhost:3000/comments?text=1
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const text = searchParams.get("text"); // text是参数名称

  const currentComments = text
    ? comments.filter((comment) => comment.text.includes(text))
    : comments;

  return Response.json(currentComments);
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
