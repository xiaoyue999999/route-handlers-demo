export async function generateStaticParams() {
  return [
    {id: '1'},
    {id: '2'},
    {id: '3'},
  ]
}

// 只需要接收参数 就是动态渲染
// 但是我马上改造
export default async function ProductPage({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  return <>
    product == {id} === {new Date().toLocaleTimeString()}
  </>
}