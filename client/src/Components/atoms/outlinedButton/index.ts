import styled from 'styled-components'

const OutlinedButton = styled.button<any>`
  padding: 12px;
  color: ${props => props.color ? props.color : props.theme.colors.orange};
  border-radius: 3px;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.color ? props.color : props.theme.colors.orange};
  transition: all 0.2s ease-in;
  text-align: center;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    background: ${props => props.color ? props.color : props.theme.colors.orange};
    color: ${props => props.theme.colors.white};
  }

  &:active {
    transform: translateY(-1px);
  }
`

export default OutlinedButton
