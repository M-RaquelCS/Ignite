import styled from 'styled-components'

import BackgroundImg from './assets/background.png'

export const HeroSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10rem;
  gap: 3.5rem;

  background: url(${BackgroundImg}) no-repeat center;
  background-size: cover; // I don't see difference

  width: 100%;
  height: 34rem;
`

export const TextSectionContainer = styled.section`
  h1 {
    font-size: 3rem;
    color: ${props => props.theme['gray-900']};
  }
  p {
    margin-top: 1rem;

    color: ${props => props.theme['gray-800']};
    font-size: 1.25rem;
  }
`

export const GridTopicsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  row-gap: 1.25rem;

  margin-top: 4rem;
`

export const TopicItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    font-size: 1rem;
  }
`

const TOPICS_COLORS = {
  yellow_dark: 'yellow-700',
  yellow: 'yellow-500',
  gray: 'gray-700',
  purple: 'purple-500',
} as const
interface StatusProps {
  topicscolor: keyof typeof TOPICS_COLORS
}

export const TopicImg = styled.div<StatusProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 50%;

  background-color: ${props => props.theme[TOPICS_COLORS[props.topicscolor]]};

  svg {
    color: ${props => props.theme.white};
  }
`