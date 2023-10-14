import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;
`

export const NavigationHeader = styled.nav`
  display: flex;
  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    background-color: ${props => props.theme['purple-300']};

    padding: 0.5rem;
    border-radius: 0.375rem;

    p {
      font-size: 0.875rem;
      color: ${props => props.theme['purple-700']}
    }

    svg {
      color: ${props => props.theme['purple-500']}
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    border-radius: 0.375rem;

    background-color: ${props => props.theme['yellow-300']};
    
    svg {
      color: ${props => props.theme['yellow-700']}
    }
  }

`