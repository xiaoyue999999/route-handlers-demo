import Link from 'next/link';

export default function ProductPage() {
  return <>
    <h1>produc</h1>
    <Link href={'/product/1'}>product -1</Link>
    <Link href={'/product/2'}>product -2</Link>
    <Link href={'/product/3'}>product -3</Link>
  </>
}