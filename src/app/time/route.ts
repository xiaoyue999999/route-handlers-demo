export const dynamic = 'force-dynamic'; // 缓存
export const revalidate = 5; // 重新加载时间

export async function GET() {
    return new Response(new Date().toISOString());
}