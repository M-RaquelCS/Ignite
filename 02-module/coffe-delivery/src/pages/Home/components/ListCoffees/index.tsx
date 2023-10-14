import { coffees } from "../../../../utils/coffees";
import { CardCoffee } from "./components/CardCoffee";
import { GridListCoffeesContainer, ListCoffeesContainer } from "./styles";

export function ListCoffees(){
  return (
    <ListCoffeesContainer>
      <h2>Nossos Cafés</h2>
      <GridListCoffeesContainer>
        {coffees.map(coffee => {
          return (
            <CardCoffee key={coffee.id} coffeeObject={coffee} />
          )
        })}
      </GridListCoffeesContainer>
    </ListCoffeesContainer>
  )
}