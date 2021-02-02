import styled from 'styled-components'

export const Box = styled.div`
  border: 1px solid ${props => props.theme.colors.gray};
  box-shadow: 2px 2px 5px 5px ${props => props.theme.colors.transpBlack};
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.white};
`

export const InputContainer = styled.div`
  margin: 8px 0;
`

export const SubmitButton = styled.button`
  padding: 12px;
  color: ${props => props.theme.colors.white};
  border-radius: 3px;
  background: ${props => props.theme.colors.orange};
  transition: all 0.2s ease-in;
  text-align: center;
  box-shadow: 1px 1px 2px 2px ${props => props.theme.colors.transpBlack};
  font-size: 1.1rem;

  &:hover {
    box-shadow: 3px 3px 3px 3px ${props => props.theme.colors.transpBlack};
    transform: translateY(-3px);
  }

  &:active {
    box-shadow: 0px 1px 2px 2px ${props => props.theme.colors.transpBlack};
    transform: translateY(1px);
  }
`

export const ClearButton = styled.button`
  padding: 12px;
  color: ${props => props.theme.colors.orange};
  border-radius: 3px;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.orange};
  transition: all 0.2s ease-in;
  text-align: center;
  font-size: 1.1rem;

  &:hover {
    background: ${props => props.theme.colors.orange};
    color: ${props => props.theme.colors.white};
  }

  &:active {
    transform: translateY(-1px);
  }
`

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 1rem;
`
