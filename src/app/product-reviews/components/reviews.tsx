export async function Reviews() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return <h1>Reviews</h1>
}