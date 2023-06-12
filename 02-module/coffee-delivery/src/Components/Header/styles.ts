import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      padding: 0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;

      text-decoration: none;

      border-radius: 6px;

      &:first-child {
        gap: 0.25rem;

        background-color: ${(props) => props.theme['purple-300']};
        color: ${(props) => props.theme['purple-700']};

        font-size: 14px;
        line-height: 130%;

        svg {
          color: ${(props) => props.theme['purple-500']};
        }
      }

      &:last-child {
        background-color: ${(props) => props.theme['yellow-300']};
        color: ${(props) => props.theme['yellow-700']};
      }
    }
  }
`
