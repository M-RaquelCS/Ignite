import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const CoffeeDetails = styled.div`
  display: flex;
  align-items: center;

  gap: 1.25rem;
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  p {
    color: ${(props) => props.theme['brown-700']};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.25rem;

    padding-inline: 0.5rem;

    font-size: 0.75rem;
    line-height: 160%;

    border: 0;
    border-radius: 0.375rem;

    background-color: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['brown-700']};

    svg {
      color: ${(props) => props.theme['purple-500']};
    }

    transition: background-color 0.25s;
    &:hover {
      background-color: ${(props) => props.theme['gray-500']};
    }
  }
`

export const Deviser = styled.div`
  content: '';

  height: 2px;
  width: 100%;

  background-color: ${(props) => props.theme['gray-400']};

  margin-block: 1.5rem;
`
