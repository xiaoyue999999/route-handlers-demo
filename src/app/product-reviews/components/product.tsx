export async function Product() {
  await new Promise(resolve => setTimeout(resolve, 6000));
  return <h1>Product</h1>
}