import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 5rem;
`

export const OrderData = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  h1 {
    color: ${(props) => props.theme['yellow-700']};
    font-weight: 800;
  }
  p {
    color: ${(props) => props.theme['brown-700']};
  }
`

export const Data = styled.div`
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  border-radius: 6px 36px;

  background: ${(props) => props.theme['gray-100']};

  position: relative;

  &::before {
    content: '';

    position: absolute;
    inset: -1px;
    z-index: -1;

    border-radius: 6px 36px;

    background: ${(props) => props.theme['gradient-500']};
  }
`

export const TitleData = styled.div`
  display: flex;
  flex-direction: column;
`
