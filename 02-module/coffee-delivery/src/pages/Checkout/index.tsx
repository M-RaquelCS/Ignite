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

import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe um CEP.'),
  street: zod.string().min(1, 'Informe o nome de sua rua.'),
  number: zod.number().int().positive(),
  neighborhood: zod.string().min(1, 'Informe o nome do seu bairro.'),
  city: zod.string().min(1, 'Informe sua Cidade.'),
  uf: zod.string().min(1, 'Informe seu Estado.'),
  typePayment: zod.string().min(1, 'Informe o tipo de pagamento.'),
})

type newOrderForm = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const [typePayment, SetTypePayment] = useState('')

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<newOrderForm>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: 0,
      neighborhood: '',
      city: '',
      uf: '',
      typePayment: '',
    },
  })

  function handleCreateNewOrder(data: newOrderForm) {
    console.log(data)
    // reset()
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCreateNewOrder)}>
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
            <CEPInput
              type="text"
              id="CEP"
              placeholder="CEP"
              {...register('cep')}
            />
            <Input
              type="text"
              id="Street"
              placeholder="Rua"
              {...register('street')}
            />
            <div>
              <Input
                type="number"
                id="number"
                placeholder="Número"
                {...register('number')}
              />
              <p>{errors.number?.message}</p>
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
                id="neighborhood"
                placeholder="Bairro"
                {...register('neighborhood')}
              />
              <Input
                type="text"
                id="city"
                placeholder="Cidade"
                {...register('city')}
              />
              <UFInput
                type="text"
                id="uf"
                placeholder="UF"
                {...register('uf')}
              />
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
              isactive={typePayment === 'creditCard'}
              onClick={() => {
                SetTypePayment('creditCard')
              }}
              type="button"
            >
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </ButtonPaymentMethods>
            <ButtonPaymentMethods
              isactive={typePayment === 'debitCard'}
              onClick={() => {
                SetTypePayment('debitCard')
              }}
              type="button"
            >
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </ButtonPaymentMethods>
            <ButtonPaymentMethods
              isactive={typePayment === 'cash'}
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
          <SubmitButton type="submit">CONFIRMAR PEDIDO</SubmitButton>
        </OrderContent>
      </section>
    </CheckoutContainer>
  )
}
