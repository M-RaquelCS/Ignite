import styled from 'styled-components'

export const SuccessContainer = styled.div`
  max-width: 1120px;
  margin-inline: auto;

  margin-top: 5rem;
`
export const SuccessHeader = styled.header`
  h1 {
    font-size: 2rem;
    color: ${props => props.theme['yellow-700']};
  }
  p {
    font-size: 1.25rem;
    color: ${props => props.theme['gray-800']};
  }
`

export const SuccessContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;

  margin-top: 2.5rem;
`

export const ResumeOrderSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;

  position: relative;
`

export const ResumeOrderLinearDiv = styled.div`
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 0.375rem 2.25rem;
  padding: 1px; 
  background:linear-gradient(120deg,
    ${props => props.theme['yellow-500']},
    ${props => props.theme['purple-500']}
  ); 
  -webkit-mask: 
     linear-gradient(#fff 0 0) content-box, 
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
`

export const DetailOrderRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`
const DETAILS_COLORS = {
  yellow_dark: 'yellow-700',
  yellow: 'yellow-500',
  purple: 'purple-500',
} as const
interface DetailsProps {
  $detailscolor: keyof typeof DETAILS_COLORS
}
export const IconDetailOrder = styled.div<DetailsProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  border-radius: 50%;
  background-color: ${props => props.theme[DETAILS_COLORS[props.$detailscolor]]};

  svg {
    color: ${props => props.theme.white};
  }
`