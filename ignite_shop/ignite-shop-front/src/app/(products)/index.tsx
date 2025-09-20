import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Link from "next/link";
import { HomeContainer, ProductContainer } from "@/styles/pages/home";

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
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products?.map(product => (
        <Link href={`/products/${product.id}`} key={product.id} prefetch={false}>
          <ProductContainer className="keen-slider__slide">
            <Image src={product.imageUrl} width={520} height={480} alt="" />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </ProductContainer>
        </Link>
      ))}
    </HomeContainer>
  )
}
