"use client"

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { getProduct } from "@/app/api/product/get-product";
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";


interface ProductContentProps {
  slug: string
}

export function ProductContent({ slug }: ProductContentProps){
  const { data } = useQuery({
    queryKey: ['productId'],
    queryFn: () => getProduct(slug),
  })

  return (
    <ProductContainer>
      <ImageContainer>
        {data && (
          <Image
            src={data.imageUrl}
            width={520}
            height={480}
            alt={data.name ?? 'Product image'}
            priority
          />
        )}
      </ImageContainer>
      <ProductDetails>
        <h1>{data?.name || ""}</h1>
        <span>{data?.price || ""}</span>

        <p>{data?.description || ""}</p>
        <button type="button">Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}