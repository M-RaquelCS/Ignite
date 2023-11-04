import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 0.375rem;

  background-color: ${props => props.theme['gray-400']};

  svg {
    color: ${props => props.theme['purple-500']};
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${props => props.theme['purple-700']};
      cursor: pointer;
    }
  }
`