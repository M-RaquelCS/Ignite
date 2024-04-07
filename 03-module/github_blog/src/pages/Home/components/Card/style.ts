import styled from 'styled-components'

export const Container = styled.a`
  padding: 2rem;
  background-color: ${(props) => props.theme['blue-700']};
  color: ${(props) => props.theme['blue-300']};
  border-radius: 0.625rem;

  margin-top: 3rem;

  text-decoration: none;

  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme['blue-600']};
  }

  div {
    max-width: 300px;
    max-height: 100px;

    overflow: hidden;
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
