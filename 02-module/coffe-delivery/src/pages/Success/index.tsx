import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";

import deliveryImg from './assets/delivery.svg'
import { DetailOrderRow, IconDetailOrder, ResumeOrderLinearDiv, ResumeOrderSection, SuccessContainer, SuccessContent, SuccessHeader } from "./styles";

export function Success() {
  const location = useLocation();
  const idOrder = location.state

  const { orders } = useContext(CartContext)

  const order = orders.find(order => order.id === idOrder)

  return (
    <SuccessContainer>
      <SuccessHeader>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessHeader>
      <SuccessContent>
        <ResumeOrderSection>
          <ResumeOrderLinearDiv />
          <DetailOrderRow>
            <IconDetailOrder $detailscolor="purple">
              <MapPin size={16} weight="fill" />
            </IconDetailOrder>
            <div>
              <p>Entrega em <strong>{order?.address.street}, {order?.address.number}</strong></p>
              <p>{order?.address.neighborhood} - {order?.address.city}, {order?.address.uf}</p>
            </div>
          </DetailOrderRow>

          <DetailOrderRow>
            <IconDetailOrder $detailscolor="yellow">
              <Timer size={16} weight="fill" />
            </IconDetailOrder>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </DetailOrderRow>

          <DetailOrderRow>
            <IconDetailOrder $detailscolor="yellow_dark">
              <CurrencyDollar size={16} />
            </IconDetailOrder>
            <div>
              <p>Pagamento na entrega</p>
              <strong>
                {order?.typePayment === 'creditCard' ? 'Cartão de crédito'
                  : order?.typePayment === 'debitCard' ? 'Cartão de débito'
                  : 'Dinheiro'
                }
                </strong>
            </div>
          </DetailOrderRow>

        </ResumeOrderSection>

        <img src={deliveryImg}/>

      </SuccessContent>
    </SuccessContainer>
  )
}