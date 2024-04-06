import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.theme['gray-700']};

  margin-top: calc(0px - 2rem - 88px);

  padding: 2rem 2.5rem;
  max-width: 864px;

  display: flex;
  gap: 2rem;
`

export const Image = styled.img`
  max-width: 148px;

  object-fit: cover;

  border-radius: 8px;
`

export const DataUser = styled.div`
  display: grid;
  gap: 1.5rem;
`

export const NameAndBio = styled.div`
  display: grid;
  gap: 0.5rem;
`

export const NameAndLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Name = styled.h1`
  color: ${(props) => props.theme['blue-100']};
`

export const Link = styled.a`
  color: ${(props) => props.theme.blue};

  text-transform: uppercase;
  text-decoration: none;

  font-size: 0.75rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  position: relative;

  &:hover {
    transition: all 0.5s ease-in-out;

    &::before {
      position: absolute;
      bottom: 0;
      left: 0;

      content: '';
      height: 1px;
      width: 100%;
      background-color: ${(props) => props.theme.blue};
    }
  }
`
export const Infos = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['blue-200']};

  svg {
    color: ${(props) => props.theme['blue-500']};
  }
`
