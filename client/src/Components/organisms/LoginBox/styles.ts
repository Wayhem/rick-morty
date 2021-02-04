/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components'
import OutlinedButton from 'Components/atoms/outlinedButton'
import StandardButton from 'Components/atoms/standardButton'

export const Box = styled.div`
  border: 1px solid ${props => props.theme.colors.gray};
  box-shadow: 2px 2px 5px 5px ${props => props.theme.colors.transpBlack};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.white};
  max-width: 700px;
  width: 50%;

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const InputContainer = styled.div`
  margin: 8px 0;
`

export const SubmitButton = styled(StandardButton)``

export const ClearButton = styled(OutlinedButton)``

export const Row = styled.div<any>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: ${props => props.marginTop || '1rem'};
  background-color: ${props => props.backgroundColor};
  border-top: ${props => props.borderTop};
`
export const Form = styled.form`
  padding: 1rem;
  width: 100%;
`

export const FormTypeButton = styled.div<any>`
  padding: 12px;
  border-right: ${props => props.borderRight};
  cursor: pointer;
  text-align: center;
  width: 50%;
  transition: all 0.2s ease-in;
  font-size: 1.1rem;
  color: ${props => props.theme.colors.orange};
  border-top: ${props => props.borderTop};

  &:hover {
    opacity: ${props => props.isSelected ? '1' : '0.5'};
    background-color: ${props => props.isSelected ? props.theme.colors.white : props.theme.colors.gray};
  }

  &:active {
    opacity: 1;
    background-color: ${props => props.theme.colors.white};
  }
`

export const FieldsContainer = styled.div`
  min-height: 136px;
`
