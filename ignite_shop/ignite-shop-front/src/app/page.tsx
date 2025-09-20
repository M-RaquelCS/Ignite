import Image from "next/image";
import { HomeContainer, ProductContainer } from "@/styles/pages/home";
import tshirt1 from "../assets/tshirts/Shirt/1.png";
import tshirt2 from "../assets/tshirts/Shirt/2.png";
import tshirt3 from "../assets/tshirts/Shirt/3.png";
import tshirt4 from "../assets/tshirts/Shirt/4.png";

export default function Home() {
  return (
    <HomeContainer>
      <ProductContainer>
        <Image src={tshirt1} width={520} height={480} alt="T-Shirt 1" />
        <footer>
          <strong>T-Shirt 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </ProductContainer>
      <ProductContainer>
        <Image src={tshirt2} width={520} height={480} alt="T-Shirt 2" />
        <footer>
          <strong>T-Shirt 2</strong>
          <span>R$ 79,90</span>
        </footer>
      </ProductContainer>
      <ProductContainer>
        <Image src={tshirt3} width={520} height={480} alt="T-Shirt 3" />
        <footer>
          <strong>T-Shirt 3</strong>
          <span>R$ 79,90</span>
        </footer>
      </ProductContainer>
      <ProductContainer>
        <Image src={tshirt4} width={520} height={480} alt="T-Shirt 4" />
        <footer>
          <strong>T-Shirt 4</strong>
          <span>R$ 79,90</span>
        </footer>
      </ProductContainer>
    </HomeContainer>
  );
}
