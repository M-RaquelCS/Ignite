import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { 
  AddressFormOrderDiv, 
  HeaderAddressFormOrder, 
  TypePaymentRow, 
  CardTypePayment
} from "./styles";

interface TypePaymentFormProps {
  typePayment: string
  setTypePayment: ( type: string ) => void;
}

export function TypePaymentForm({ typePayment , setTypePayment }:TypePaymentFormProps){

  return (
    <AddressFormOrderDiv>
      <HeaderAddressFormOrder>
        <CurrencyDollar size={22}/>
        <div>
          <p>Pagamento</p>
          <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
        </div>
      </HeaderAddressFormOrder>

      <TypePaymentRow>
        <CardTypePayment 
          type="button" 
          $isActive={typePayment === 'creditCard'}
          onClick={() => {
            setTypePayment('creditCard')
          }}
        >
          <CreditCard size={16} />
          Cartão de crédito
        </CardTypePayment>
        <CardTypePayment 
          type="button" 
          $isActive={typePayment === 'debitCard'}
          onClick={() => {
            setTypePayment('debitCard')
          }}
        >
          <Bank size={16} />
          Cartão de débito
        </CardTypePayment>
        <CardTypePayment 
          type="button" 
          $isActive={typePayment === 'cash'}
          onClick={() => {
            setTypePayment('cash')
          }}
        >
          <Money size={16} />
          Dinheiro
        </CardTypePayment>
      </TypePaymentRow>
    </AddressFormOrderDiv>
  )
}