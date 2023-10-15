import styled from 'styled-components'

export const CartLinkContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 0.375rem;

  background-color: ${props => props.theme['yellow-300']};

  position: relative;
  
  svg {
    color: ${props => props.theme['yellow-700']}
  }
`

export const AmountItemsOnCart = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.25rem;
  height: 1.25rem;

  position: absolute;
  top: calc(-0.9rem / 2);
  right: calc(-1rem / 2);

  border-radius: 50%;
  background-color: ${props => props.theme['yellow-700']};

  font-size: 0.75rem;
  color: ${props => props.theme.white};

  // alinhar o número no centro da 'bolinha'
  padding-top: 0.1rem;
  padding-left: 0.1rem;
`