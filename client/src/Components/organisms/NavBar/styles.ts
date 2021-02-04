import styled from 'styled-components'

export const Bar = styled.div`
  padding: 1rem 4rem;
  display: flex;
  flex-direction: row-reverse;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 1px 1px 2px 2px ${props => props.theme.colors.transpBlack};
  align-items: center;

  @media (max-width: 1024px) {
    padding: 1 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const Username = styled.div`
  color: ${props => props.theme.colors.darkBlue};
  margin-right: 1rem;
`
