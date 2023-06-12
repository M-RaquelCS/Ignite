import { styled } from 'styled-components'

import BackgroundImg from '../../../../assets/background.png'

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 3.5rem;

  height: 544px;

  background: url(${BackgroundImg});
`

export const TitlesIntro = styled.div`
  h1 {
    font-weight: 900;
    font-size: 3rem;

    color: ${(props) => props.theme['brown-900']};
  }
  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['brown-700']};
  }
`

export const ItemsIntro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.25rem;

  margin-top: 66px;
`
const BACKGROUND_COLORS = {
  yellow: 'yellow-700',
  yellowLight: 'yellow-500',
  purple: 'purple-500',
  brown: 'brown-500',
}

interface ItemProps {
  backgroundcolor: keyof typeof BACKGROUND_COLORS
}

export const ItemIntro = styled.p<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  white-space: nowrap;

  svg {
    width: 32px;
    height: 32px;

    padding: 0.5rem;
    border-radius: 50%;

    background-color: ${(props) =>
      props.theme[BACKGROUND_COLORS[props.backgroundcolor]]};
    color: ${(props) => props.theme['gray-100']};
  }
`
