import styled from 'styled-components'

export const FormOrderContainer = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;

  max-width: 1120px;
  margin-inline: auto;
`

export const SectionFormOrderContainer = styled.section`
  width: 100%;
`

export const SectionAddressFormOrderContainer = styled(SectionFormOrderContainer)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const ResumeOrderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;

  padding: 2.5rem;
  border-radius: 0.375rem 2.75rem;
  background-color: ${props => props.theme['gray-200']};

  margin-top: 1rem;
`

export const ResumeTotalOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  width: 100%;
`

export const ResumeTotalOrderLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 0.875rem;
  }

  p {
    font-size: 1rem;
  }
`

export const TotalLine = styled(ResumeTotalOrderLine)`
  font-weight: bold;
  span, p {
    font-size: 1.25rem;
  }
`

export const ListCardCoffee = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ButtonConfirmOrder = styled.button`
  width: 100%;
  padding: 0.75rem 0.5rem;

  border: none;
  border-radius: 0.375rem;
  background-color: ${props => props.theme['yellow-500']};

  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.theme.white};

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${props => props.theme['yellow-700']};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${props => props.theme['gray-600']};
  }
`

export const AddressFormOrder = styled.div`
  padding: 2.5rem;
  border-radius: 0.375rem;
  background-color: ${props => props.theme['gray-200']}
`

const ICONS_COLORS = {
  yellow_dark: 'yellow-700',
  purple: 'purple-500',
} as const

interface IconsProps {
  $iconscolor: keyof typeof ICONS_COLORS
}

export const HeaderAddressFormOrder = styled.header<IconsProps>`
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
    color: ${props => props.theme[ICONS_COLORS[props.$iconscolor]]};
  }
`

export const InputsAddressFormOrder = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;

  align-self: stretch;
  margin-top: 2rem;
`

export const Input = styled.input`
  padding: 0.75rem;

  border-radius: 0.25rem;
  border: 1px solid ${props => props.theme['gray-400']};
  background-color: ${props => props.theme['gray-300']};

  width: 100%;

  &::placeholder{
    font-size: 0.875rem;
    color: ${props => props.theme['gray-600']};
  }
`

export const MediumInput = styled(Input) `
  max-width: 12.5rem;
`

export const SmallInput = styled(Input) `
  max-width: 3.75rem;
`

export const InputsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  width: 100%;
`

export const ComplementInput = styled.div `
  display: flex;
  width: 100%;
  position: relative;

  span {
    position: absolute;
    top: 0.8rem;
    left: 92%;
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