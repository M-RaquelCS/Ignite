import { styled } from 'styled-components'

export const ContainerListCoffees = styled.div`
  margin-top: 3.375rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem 2rem;
`

export const CardCoffee = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 0.375rem 2.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: calc(0px - 1.5rem - 6px);
  }
`

export const DescriptionCoffee = styled.div`
  text-align: center;
  margin-top: 1rem;
  gap: 0.5rem;
  p {
    color: ${(props) => props.theme['brown-300']};
    font-size: 0.875rem;

    max-width: 13.5rem;
  }
`

export const Tags = styled.div`
  margin-top: 1rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    background-color: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-700']};

    padding: 0.25rem 0.5rem;

    border-radius: 6rem;
  }
`

export const Buy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 13rem;

  margin: 2rem auto 1.25rem;

  p {
    color: ${(props) => props.theme['brown-500']};
    text-align: right;

    font-size: 0.875rem;

    strong {
      font-size: 1.2rem;
    }
  }
`
export const BuyActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const CoffeeAmountInput = styled.input`
  border-radius: 0.375rem;
  border: 0;

  padding: 0.5rem;
  height: 2.375rem;
  width: 4.5rem;

  background-color: ${(props) => props.theme['gray-400']};
`

export const ShoppingButton = styled.button`
  border: 0;
  border-radius: 0.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  background-color: ${(props) => props.theme['purple-700']};

  svg {
    color: ${(props) => props.theme['gray-200']};
  }
`
