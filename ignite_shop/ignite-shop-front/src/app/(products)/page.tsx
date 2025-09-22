import { useKeenSlider } from "keen-slider/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HomeContainer, ProductsContainer } from "@/styles/pages/home";

interface ProductsProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[] | undefined
}

export default function Products({ products }: ProductsProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <>
    <Head>
      <title>Home | Ignite Shop</title>
    </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products?.map(product => (
          <Link href={`/products/${product.id}`} key={product.id} prefetch={false}>
            <ProductsContainer className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" priority />

              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </ProductsContainer>
          </Link>
        ))}
      </HomeContainer>
    </>
  )
}
