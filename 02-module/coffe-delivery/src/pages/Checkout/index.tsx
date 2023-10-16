import { useContext, useState } from "react";
import { FormProvider, useForm } from 'react-hook-form'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { CartContext } from "../../context/CartContext";

import { AddressFormOrder } from "./components/AddressFormOrder";
import { ResumeCardCoffee } from "./components/ResumeCardCoffee";
import { TypePaymentForm } from "./components/TypePaymentForm";

import { 
  ButtonConfirmOrder, 
  FormOrderContainer,  
  ListCardCoffee, 
  ResumeOrderSection, 
  ResumeTotalOrder, 
  ResumeTotalOrderLine, 
  SectionAddressFormOrderContainer, 
  SectionFormOrderContainer,  
  TotalLine
} from "./styles";

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe um CEP.'),
  street: zod.string().min(1, 'Informe o nome de sua rua.'),
  number: zod.number().int().positive('Informe um número válido.'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o nome do seu bairro.'),
  city: zod.string().min(1, 'Informe sua Cidade.'),
  uf: zod.string().min(1, 'Informe seu Estado.'),
})

const partialNewOrderFormValidationSchema = newOrderFormValidationSchema.partial({
   complement: true
})

type newOrderForm = zod.infer<typeof partialNewOrderFormValidationSchema>

export function Checkout(){

  const { cart } = useContext(CartContext)
  const [typePayment, SetTypePayment] = useState('')

  const newOrderForm = useForm<newOrderForm>({
    resolver: zodResolver(newOrderFormValidationSchema)
  })

  const { handleSubmit, formState: { errors } } = newOrderForm
  console.log(errors)

  function handleGetTypePayment(type: string) {
    SetTypePayment(type)
  }

  function handleCreateNewOrderForm(data: newOrderForm) {
    console.log(cart)
    console.log(data, typePayment)
  }

  return(
    <FormOrderContainer onSubmit={handleSubmit(handleCreateNewOrderForm)} >
      <FormProvider {...newOrderForm}>
        <SectionAddressFormOrderContainer>

          <h5>Complete seu pedido</h5>
          <AddressFormOrder />
          <TypePaymentForm
            typePayment={typePayment}
            setTypePayment={handleGetTypePayment}
          />

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
      </FormProvider>
    </FormOrderContainer>
  )
}