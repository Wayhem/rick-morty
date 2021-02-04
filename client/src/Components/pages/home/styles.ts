/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components'

export const Container = styled.div<any>`
  display: flex;
  overflow-y: scroll;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  height: calc(100vh - 75px);
  font-family: ${props => props.theme.font};
  padding: 4rem;
  opacity: ${props => props.isLoading ? '0.5' : '1'};

  @media (max-width: 1024px) {
    padding: 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`
