import { ShoppingCart } from '@phosphor-icons/react'

import { CardCoffeeContainer, Price, PriceAndQuantityRow, Quantity, QuantitySubmitRow, Tags, TagsRow, TextContent } from "./styles";

type CardCoffeeProps = {
  coffeeObject: {
    id: number;
    tags: string[];
    name: string;
    description: string;
    img: string;
    price: string;
  }
}

export function CardCoffee({ coffeeObject }: CardCoffeeProps){
  return (
    <CardCoffeeContainer key={coffeeObject.id}>

      <img src={coffeeObject.img}/>
      
      <TagsRow>
        {coffeeObject.tags.map((tag, index) => {
          return(
            <Tags key={index}>{tag}</Tags>
          )
        })}
      </TagsRow>
      
      <TextContent>
        <h4>{coffeeObject.name}</h4>
        <p>{coffeeObject.description}</p>
      </TextContent>

      <PriceAndQuantityRow>
        <Price>
          <span>R$</span>
          <h5>{coffeeObject.price}</h5>
        </Price>

        <QuantitySubmitRow>
          <Quantity type="number" />
          <button>
            <ShoppingCart size={18} weight="fill" />
          </button>
        </QuantitySubmitRow>
      
      </PriceAndQuantityRow>

    </CardCoffeeContainer>
  )
}