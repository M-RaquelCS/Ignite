import { ProductContent } from "./_components/ProductContent";

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string[] }>
}){

  const { slug } = await params

  return (
    <ProductContent slug={slug[1]} />
  )
}