import styled from "styled-components";

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
    color: ${props => props.theme["yellow-700"]};
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