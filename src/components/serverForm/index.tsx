import Form from 'next/form';

export function ServerForm() {
  return (
    <Form action="/product-db">
      <input type="text" name="query" />
      <button type="submit">搜索</button>
    </Form>
  );
}
