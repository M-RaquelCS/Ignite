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