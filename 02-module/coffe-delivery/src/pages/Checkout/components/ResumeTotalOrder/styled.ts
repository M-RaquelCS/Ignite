import styled from 'styled-components'

export const ResumeTotalOrderDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  width: 100%;
`

export const ResumeTotalOrderLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 0.875rem;
  }

  p {
    font-size: 1rem;
  }
`

export const TotalLine = styled(ResumeTotalOrderLine)`
  font-weight: bold;
  span, p {
    font-size: 1.25rem;
  }
`