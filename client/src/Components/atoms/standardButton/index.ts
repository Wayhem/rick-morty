import styled from 'styled-components'

const Button = styled.button`
  padding: 12px;
  color: ${props => props.theme.colors.white};
  border-radius: 3px;
  background: ${props => props.theme.colors.orange};
  transition: all 0.2s ease-in;
  text-align: center;
  box-shadow: 1px 1px 2px 2px ${props => props.theme.colors.transpBlack};
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    box-shadow: 3px 3px 3px 3px ${props => props.theme.colors.transpBlack};
    transform: translateY(-3px);
  }

  &:active {
    box-shadow: 0px 1px 2px 2px ${props => props.theme.colors.transpBlack};
    transform: translateY(1px);
  }
`

export default Button
