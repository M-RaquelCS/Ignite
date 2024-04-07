import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4.5rem;
  margin-inline: auto;

  display: grid;
  justify-items: center;

  max-width: 864px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`
export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;

  border-radius: 0.375rem;
  border: 1px solid ${(props) => props.theme['blue-600']};

  background-color: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['blue-200']};

  margin-top: 0.75rem;

  &::placeholder {
    color: ${(props) => props.theme['blue-500']};
  }
`
