import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { ResumeCardCoffee } from "./components/ResumeCardCoffee";
import { ButtonConfirmOrder, ListCardCoffee, ResumeOrderSection, ResumeTotalOrder, ResumeTotalOrderLine, TotalLine } from "./styles";

export function Checkout(){

  const { cart } = useContext(CartContext)

  return(
    <div>
      <section></section>
      <section>
        <h5>Cafés selecionados</h5>

        <ResumeOrderSection>

          <ListCardCoffee>
            {cart.map((coffee) => {
              return(
                <ResumeCardCoffee 
                  key={coffee.id}
                  id={coffee.id}
                  amount={coffee.amount}
                />
              )
            })}
          </ListCardCoffee>

          <ResumeTotalOrder>
            <ResumeTotalOrderLine>
              <span>Total de itens</span>
              <p>R$ 29,70</p>
            </ResumeTotalOrderLine>
            <ResumeTotalOrderLine>
              <span>Entrega</span>
              <p>R$ 3,50</p>
            </ResumeTotalOrderLine>
            <TotalLine>
              <span>Total</span>
              <p>R$ 33,20</p>
            </TotalLine>
          </ResumeTotalOrder>

          <ButtonConfirmOrder>
            Confirmar Pedido
          </ButtonConfirmOrder>

        </ResumeOrderSection>
      </section>
    </div>
  )
}