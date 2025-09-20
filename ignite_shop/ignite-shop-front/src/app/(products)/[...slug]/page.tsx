import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";

export default function Product(){
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,00</span>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium deserunt vel unde? Iste fugiat perspiciatis ab impedit blanditiis beatae neque facilis veniam architecto, quae eaque rem velit, id illo vero.</p>
        <button type="button">Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}