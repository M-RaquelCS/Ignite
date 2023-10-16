import styled from 'styled-components'

export const AddressFormOrderDiv = styled.div`
  padding: 2.5rem;
  border-radius: 0.375rem;
  background-color: ${props => props.theme['gray-200']}
`

export const HeaderAddressFormOrder = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  
  p {
    font-size: 1rem;
    color: ${props => props.theme['gray-800']};
  }

  span {
    font-size: 0.875rem;
  }

  svg {
    color: ${props => props.theme['purple-500']};
  }
`

export const TypePaymentRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: space-between;

  margin-top: 2rem;
`
interface ButtonPaymentProps {
  $isActive: boolean
}

export const CardTypePayment = styled.button<ButtonPaymentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;

  border: none;
  padding: 1rem;

  border-radius: 0.375rem;
  border: 1px solid ${props => props.$isActive ? props.theme['purple-700'] : 0};
  background-color: ${props => props.$isActive ? props.theme['purple-300'] : props.theme['gray-400']};

  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${props => props.theme['gray-700']};

  svg {
    color: ${props => props.theme['purple-500']};
  }

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${props => props.theme['gray-500']};
  }
  
`