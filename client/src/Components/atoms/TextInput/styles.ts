import styled from 'styled-components'

export const TextInputContainer = styled.div`
  position: relative;
`

export const TextInput = styled.input<any>`
  display: inline-block;
  width: 500px;
  height: 40px;
  box-sizing: border-box;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 10px 10px 10px 100px;
  transition: all 0.1s ease-out;

  &:focus {
    padding: 10px;
    transition: all 0.3s ease-out;
    transition-delay: 0.2s;
  }

  & + label {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 40px;
    line-height: 40px;
    color: white;
    border-radius: 3px 0 0 3px;
    width: 90px;
    background: ${props => props.theme.colors.orange};
    transform: translateZ(0) translateX(0);
    transition: all 0.3s ease-in;
    transition-delay: 0.2s;
    text-align: center;
  }

  &:focus + label {
    transform: translateY(${props => props.coordinateY}) translateX(${props => props.coordinateX});
    border-radius: 3px;
    transition: all 0.1s ease-out;
  }
`
