import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import {
  Address,
  ButtonPaymentMethods,
  CEPInput,
  CheckoutContainer,
  Content,
  Header,
  Input,
  OrderContent,
  PaymentMethods,
  SubmitButton,
  UFInput,
} from './styles'
import { useState } from 'react'
import { CardCoffee } from './components/CardCoffee'

export function Checkout() {
  const [typePayment, SetTypePayment] = useState('')

  return (
    <CheckoutContainer action="">
      <section>
        <h1>Complete seu pedido</h1>

        <Content>
          <Header color="yellow">
            <MapPinLine size={22} />
            <div>
              <h1>Endereço de Entrega</h1>
              <p>Informe o endereço onde deseja receber seu pedido.</p>
            </div>
          </Header>

          <Address>
            <CEPInput type="text" name="CEP" id="CEP" placeholder="CEP" />
            <Input type="text" name="Street" id="Street" placeholder="Rua" />
            <div>
              <Input
                type="number"
                name="number"
                id="number"
                placeholder="Número"
              />
              <Input
                type="text"
                name="complement"
                id="complement"
                placeholder="Complemento"
              />
            </div>
            <div>
              <Input
                type="text"
                name="neighborhood"
                id="neighborhood"
                placeholder="Bairro"
              />
              <Input type="text" name="city" id="city" placeholder="Cidade" />
              <UFInput type="text" name="uf" id="uf" placeholder="UF" />
            </div>
          </Address>
        </Content>

        <Content>
          <Header color="purple">
            <CurrencyDollar size={22} />
            <div>
              <h1>Pagamento</h1>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja
                pagar.
              </p>
            </div>
          </Header>
          <PaymentMethods>
            <ButtonPaymentMethods
              isActive={typePayment === 'creditCard'}
              onClick={() => {
                SetTypePayment('creditCard')
              }}
              type="button"
            >
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </ButtonPaymentMethods>
            <ButtonPaymentMethods
              isActive={typePayment === 'debitCard'}
              onClick={() => {
                SetTypePayment('debitCard')
              }}
              type="button"
            >
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </ButtonPaymentMethods>
            <ButtonPaymentMethods
              isActive={typePayment === 'cash'}
              onClick={() => {
                SetTypePayment('cash')
              }}
              type="button"
            >
              <Money size={16} />
              DINHEIRO
            </ButtonPaymentMethods>
          </PaymentMethods>
        </Content>
      </section>

      <section>
        <h1>Cafés selecionados</h1>
        <OrderContent>
          <CardCoffee
            key={1}
            image="https://lh3.googleusercontent.com/pw/AJFCJaW6h5K4j3I3FrDVNpUxQYE4b5OOIM-T3Q-fgHvWhKhXNUrfSn7iKIXuNKou52yDXdtfZHO_NG3PcOFGlRyYiiwIpJYZ1wFum9uOMLd0AiP6rxqVymBtrZ4jO6RyM4UiUIWV2yqci42qsaT8k6TlnxbP=w120-h120-s-no?authuser=0"
            title="Expresso Tradicional"
            price={9.9}
          />
          <CardCoffee
            key={1}
            image="https://lh3.googleusercontent.com/pw/AJFCJaW6h5K4j3I3FrDVNpUxQYE4b5OOIM-T3Q-fgHvWhKhXNUrfSn7iKIXuNKou52yDXdtfZHO_NG3PcOFGlRyYiiwIpJYZ1wFum9uOMLd0AiP6rxqVymBtrZ4jO6RyM4UiUIWV2yqci42qsaT8k6TlnxbP=w120-h120-s-no?authuser=0"
            title="Expresso Tradicional"
            price={9.9}
          />
          <CardCoffee
            key={1}
            image="https://lh3.googleusercontent.com/pw/AJFCJaW6h5K4j3I3FrDVNpUxQYE4b5OOIM-T3Q-fgHvWhKhXNUrfSn7iKIXuNKou52yDXdtfZHO_NG3PcOFGlRyYiiwIpJYZ1wFum9uOMLd0AiP6rxqVymBtrZ4jO6RyM4UiUIWV2yqci42qsaT8k6TlnxbP=w120-h120-s-no?authuser=0"
            title="Expresso Tradicional"
            price={9.9}
          />
          <SubmitButton type="submit">CONFIRMAR PEDIDO</SubmitButton>
        </OrderContent>
      </section>
    </CheckoutContainer>
  )
}
