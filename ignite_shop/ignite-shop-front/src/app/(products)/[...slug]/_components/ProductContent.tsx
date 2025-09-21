"use client"

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { getProduct } from "@/services/stripe/products/get-product";
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";


interface ProductContentProps {
  slug: string
}

interface ProductProps {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string | null;
    defaultPriceId: string;
}

export function ProductContent({ slug }: ProductContentProps){
  const { data } = useQuery<ProductProps>({
    queryKey: ['productId'],
    queryFn: () => getProduct(slug),
  })

  async function handleByProduct(){
    try{
      const response = await axios.post('/api/checkout', {
        priceId: data?.defaultPriceId
      })
      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl

    } catch (err){
      // Conectar com uma ferramenta de observabilidade
      console.log(err)
      alert('Falha ao redirecionar ao checkout!')
    }
  }  

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
        <button type="button" onClick={handleByProduct}>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}