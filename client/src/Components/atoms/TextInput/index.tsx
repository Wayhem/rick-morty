import React from 'react'
import { TextInput, TextInputContainer } from 'Components/atoms/TextInput/styles'
import { positionShift } from 'Config/constants/inputLabelShift'

interface InputProps {
  placeholder: string;
  label: string;
  inputId: string;
  value: string;
  labelShift?: positionShift;
  type?: string;
  required?: boolean | undefined;
  onChange(e: any): void;
}

const Input = ({ onChange, placeholder, label, inputId, value, labelShift, type, required }: InputProps) => {
  const getCoordinates = (position: positionShift | undefined): { coordinateX: string; coordinateY: string } => {
    switch (position) {
      case positionShift.up:
        return { coordinateX: '0', coordinateY: '-120%' }
      case positionShift.left:
        return { coordinateX: '-120%', coordinateY: '0' }
      case positionShift.down:
        return { coordinateX: '0', coordinateY: '120%' }
      default:
        return { coordinateX: '-120%', coordinateY: '0' }
    }
  }

  const { coordinateX, coordinateY } = getCoordinates(labelShift)

  return (
    <TextInputContainer>
      <TextInput
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        id={inputId}
        value={value}
        coordinateX={coordinateX}
        coordinateY={coordinateY}
        required={required}
      />
      <label htmlFor={inputId}>{label}</label>
    </TextInputContainer>
  )
}

Input.defaultProps = {
  labelShift: positionShift.left,
  type: 'text',
  required: undefined
}

export default Input
