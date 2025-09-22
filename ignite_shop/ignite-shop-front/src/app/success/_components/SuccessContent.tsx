"use client"

import { useQuery } from "@tanstack/react-query"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { getAllDataSuccessCheckout } from "@/services/stripe/products/get-all-data-success-checkout"
import { ImageContainer, SuccessContainer } from "@/styles/pages/success"

interface SuccessContentProps {
  session_id: string | string[] | undefined
}

interface SuccessProps {
  costumerName: string;
  product: {
    name: string;
    imageUrl: string;
  }
}

export function SuccessContent({ session_id }: SuccessContentProps){
  const { data } = useQuery<SuccessProps>({
      queryKey: ['session_id'],
      queryFn: () => getAllDataSuccessCheckout(session_id),
    })

  return (
    <>
    <Head>
      <title>Success | Ignite Shop</title>
    </Head>
      <SuccessContainer>
        <h1>Compra efetuada</h1>

        <ImageContainer>
          {data && (
            <Image src={data.product.imageUrl || ""} width={120} height={110} alt=""/>
          )}
          
        </ImageContainer>

        <p>
          Uhuul <strong>{data?.costumerName}</strong>, sua <strong>{data?.product.name}</strong> já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}