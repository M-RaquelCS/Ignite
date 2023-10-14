import styled from 'styled-components'

export const ListCoffeesContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`

export const GridListCoffeesContainer = styled.div`
  margin-top: 4rem;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
`