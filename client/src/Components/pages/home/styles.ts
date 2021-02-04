import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  overflow-y: scroll;
  flex-wrap: wrap;
  justify-content: space-between;
  height: calc(100vh - 75px);
  font-family: ${props => props.theme.font};
  padding: 4rem;

  @media (max-width: 1024px) {
    padding: 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`
