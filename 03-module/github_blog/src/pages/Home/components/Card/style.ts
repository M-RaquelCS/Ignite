import styled from 'styled-components'

export const Container = styled.a`
  padding: 2rem;
  background-color: ${(props) => props.theme['blue-700']};
  border-radius: 0.625rem;

  margin-top: 3rem;

  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme['blue-600']};
  }

  p {
    max-width: 300px;
    max-height: 100px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  margin-bottom: 1.25rem;

  span {
    white-space: nowrap;
  }
`
