import styled from 'styled-components'

export const ResumeCardCoffeeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${props => props.theme['gray-400']};
`
export const DetailsRow = styled.div`
  width: 100%;
` 

export const TitleCoffeeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${props => props.theme['gray-800']};
  }
`

export const ActionsCoffeeRow = styled.div`
  margin-top: 0.5rem;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;

  font-size: 0.75rem;
  text-transform: uppercase;

  border: none;
  border-radius: 0.375rem;
  background-color: ${props => props.theme['gray-400']};

  cursor: pointer;

  svg {
    color: ${props => props.theme['purple-500']};
  }

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${props => props.theme['gray-500']};
  }
`

export const Divider = styled.div`
  content: '';
  height: 1px;
  width: 100%;

  background-color: red;
`