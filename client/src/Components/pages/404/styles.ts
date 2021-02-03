import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: ${props => props.theme.font};
`

export const Box = styled.div`
  border: 1px solid ${props => props.theme.colors.gray};
  box-shadow: 2px 2px 5px 5px ${props => props.theme.colors.transpBlack};
  border-radius: 4px;
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${props => props.theme.colors.white};
  max-width: 450px;
  width: 35%;

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 65%;
  }
`

export const Dio = styled.span`
  background: red;
  background: -webkit-linear-gradient(left, orange , yellow, green, cyan, blue, violet);
  background: -o-linear-gradient(right, orange, yellow, green, cyan, blue, violet);
  background: -moz-linear-gradient(right, orange, yellow, green, cyan, blue, violet);
  background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
