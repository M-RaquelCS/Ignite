import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { ResumeCardCoffee } from "./components/ResumeCardCoffee";
import { AddressFormOrder, ButtonConfirmOrder, CardTypePayment, FormOrderContainer, HeaderAddressFormOrder, Input, InputsAddressFormOrder, InputsRow, ListCardCoffee, MediumInput, ResumeOrderSection, ResumeTotalOrder, ResumeTotalOrderLine, SectionAddressFormOrderContainer, SectionFormOrderContainer, SmallInput, TotalLine, TypePaymentRow } from "./styles";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";

export function Checkout(){

  const { cart } = useContext(CartContext)

  return(
    <FormOrderContainer>
      <SectionAddressFormOrderContainer>

        <h5>Complete seu pedido</h5>

        <AddressFormOrder>

          <HeaderAddressFormOrder $iconscolor="yellow_dark">
            <MapPinLine size={22}/>
            <div>
              <p>Endereço de entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </HeaderAddressFormOrder>

          <InputsAddressFormOrder>
            <MediumInput type="text" about="cep" placeholder="CEP"/>
            <Input type="text" about="street" placeholder="Rua"/>

            <InputsRow>
              <MediumInput type="text" about="number" placeholder="Número"/>
              <Input type="text" about="complement" placeholder="Complemento"/>
            </InputsRow>

            <InputsRow>
              <MediumInput type="text" about="neighborhood" placeholder="Bairro"/>
              <Input type="text" about="city" placeholder="Cidade"/>
              <SmallInput type="text" about="uf" placeholder="UF"/>
            </InputsRow>

          </InputsAddressFormOrder>

        </AddressFormOrder>

        <AddressFormOrder>
          <HeaderAddressFormOrder $iconscolor="purple">
            <CurrencyDollar size={22}/>
            <div>
              <p>Pagamento</p>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
          </HeaderAddressFormOrder>

          <TypePaymentRow>
            <CardTypePayment type="button" $isActive={true}>
              <CreditCard size={16} />
              Cartão de crédito
            </CardTypePayment>
            <CardTypePayment type="button" $isActive={false}>
              <Bank size={16} />
              Cartão de débito
            </CardTypePayment>
            <CardTypePayment type="button" $isActive={true}>
              <Money size={16} />
              Dinheiro
            </CardTypePayment>
          </TypePaymentRow>
        </AddressFormOrder>

      </SectionAddressFormOrderContainer>

      <SectionFormOrderContainer>
        <h5>Cafés selecionados</h5>

        <ResumeOrderSection>

          <ListCardCoffee>
            { cart.length > 0 ? (
              cart.map((coffee) => {
                return(
                  <ResumeCardCoffee 
                    key={coffee.id}
                    id={coffee.id}
                    amount={coffee.amount}
                  />
                )
              })
            ) : (
              <h4 style={{ textAlign: 'center' }}>Carrinho está vazio!</h4>
            )}
            
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

          <ButtonConfirmOrder
            disabled={cart.length <= 0}
            type="submit"
            onClick={() => {
              console.log('oi')
            }}
          >
            Confirmar Pedido
          </ButtonConfirmOrder>

        </ResumeOrderSection>
      </SectionFormOrderContainer>

    </FormOrderContainer>
  )
}