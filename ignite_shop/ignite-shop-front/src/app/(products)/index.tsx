import { useQuery } from "@tanstack/react-query";
import { useKeenSlider } from "keen-slider/react";
import { getProducts } from "@/app/api/home/get-products";

interface ProductsProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export default function Products() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  return <h1>Products Page</h1>;
}

// HomeContainer ref={sliderRef} className="keen-slider">
//       {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
//       <ProductContainer className="keen-slider__slide">
//         <Image src={tshirt1} width={520} height={480} alt="T-Shirt 1" />
//         <footer>
//           <strong>T-Shirt 1</strong>
//           <span>R$ 79,90</span>
//         </footer>
//       </ProductContainer>
//       <ProductContainer className="keen-slider__slide">
//         <Image src={tshirt2} width={520} height={480} alt="T-Shirt 2" />
//         <footer>
//           <strong>T-Shirt 2</strong>
//           <span>R$ 79,90</span>
//         </footer>
//       </ProductContainer>
//       <ProductContainer className="keen-slider__slide">
//         <Image src={tshirt3} width={520} height={480} alt="T-Shirt 3" />
//         <footer>
//           <strong>T-Shirt 3</strong>
//           <span>R$ 79,90</span>
//         </footer>
//       </ProductContainer>
//       <ProductContainer className="keen-slider__slide">
//         <Image src={tshirt4} width={520} height={480} alt="T-Shirt 4" />
//         <footer>
//           <strong>T-Shirt 4</strong>
//           <span>R$ 79,90</span>
//         </footer>
//       </ProductContainer>
//     </HomeContainer>