import styled from 'styled-components'

export const CardCoffeeContainer = styled.div`
  background-color: ${props => props.theme['gray-200']};
  border-radius: 0.375rem 2.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 1.5rem 1.25rem 1.5rem;

  img {
    margin-top: calc(0px - 1.5rem - 6px);
  }
`

export const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;

  margin-top: 0.75rem;
`

export const Tags = styled.span`
  background-color: ${props => props.theme['yellow-300']};
  padding: 0.25rem 0.5rem;
  border-radius: 6.25rem;

  text-transform: uppercase;
  font-size: 0.625rem;
  font-weight: bold;
  color: ${props => props.theme['yellow-700']};
`

export const TextContent = styled.div`
  margin-top: 1rem;

  text-align: center;

  h4 {
    font-size: 1.25rem;
    color: ${props => props.theme['gray-800']};
  }

  p {
    font-size: 0.875rem;
    color: ${props => props.theme['gray-600']};
  }
`

export const PriceAndQuantityRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;
  width: 100%;
`
export const Price = styled.div`
  display: flex;
  align-items: baseline;

  span {
    font-size: 0.875rem;
    margin-right: 2px;
  }

  h5 {
    font-size: 1.5rem;
  }
`

export const QuantitySubmitRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    cursor: pointer;

    padding: 0.5rem;
    border-radius: 0.375rem;
    background-color: ${props => props.theme['purple-700']};

    svg {
      color: ${props => props.theme.white};
    }

    transition: all 200ms ease-out;

    &:hover {
      background-color: ${props => props.theme['purple-500']};
    }
  }
`

export const Quantity = styled.input`
  border: none;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background-color: ${props => props.theme['gray-400']};

  max-width: 4.5rem;

  &:active {
    border: 1px solid ${props => props.theme['yellow-700']};
  }
`