import { styled } from 'styled-components'

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin-top: 2.5rem;
`

export const Content = styled.div`
  margin-top: 0.75rem;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['gray-200']};
`

const SVG_COLORS = {
  yellow: 'yellow-700',
  purple: 'purple-500',
}

interface HeaderProps {
  color: keyof typeof SVG_COLORS
}

export const Header = styled.header<HeaderProps>`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme[SVG_COLORS[props.color]]};
  }
`

export const OrderContent = styled(Content)`
  border-radius: 0.375rem 2.25rem;
`
export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    align-self: stretch;
  }
`

export const Input = styled.input`
  padding: 0.75rem;

  width: 100%;

  border-radius: 0.25rem;
  border: 1px solid ${(props) => props.theme['gray-400']};

  background-color: ${(props) => props.theme['gray-300']};
`

export const UFInput = styled(Input)`
  max-width: 3.75rem;
`
export const CEPInput = styled(Input)`
  max-width: 12.5rem;
`

interface ButtonPaymentMethodsProps {
  isActive: boolean
}

export const PaymentMethods = styled.div`
  display: flex;
  gap: 0.75rem;
`
export const ButtonPaymentMethods = styled.button<ButtonPaymentMethodsProps>`
  display: flex;
  align-items: center;

  padding: 1rem;
  gap: 0.75rem;

  font-size: 0.75rem;
  flex-wrap: wrap;

  border: 0;
  border-radius: 0.375rem;

  background-color: ${(props) =>
    props.isActive ? props.theme['purple-300'] : props.theme['gray-400']};

  color: ${(props) => props.theme['brown-500']};

  border: 1px solid
    ${(props) => (props.isActive ? props.theme['purple-700'] : 0)};

  &:active {
    border: 1px solid ${(props) => props.theme['purple-700']};
    background-color: ${(props) => props.theme['purple-300']};
  }

  transition: background-color 0.25s;
  &:hover {
    background-color: ${(props) => props.theme['gray-500']};
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`
export const SubmitButton = styled.button`
  border: 0;
  border-radius: 0.375rem;

  width: 100%;
  padding-block: 0.75rem;

  background-color: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme.white};

  transition: background-color 0.25s;
  &:hover {
    background-color: ${(props) => props.theme['yellow-700']};
  }

  font-weight: bold;
`
