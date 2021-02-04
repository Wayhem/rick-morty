/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { keyframes } from 'styled-components'

export const Box = styled.div`
  box-shadow: 2px 2px 5px 5px ${props => props.theme.colors.transpBlack};
  border-radius: 4px;
  display: flex;
  background-color: ${props => props.theme.colors.lighterDarkBlue};
  max-width: 600px;
  width: 30%;
  margin: 2rem 0;
  position: relative;
  max-height: 210px;
  cursor: pointer;

  @media (max-width: 1600px) {
    width: 45%;
  }

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`

export const Image = styled.img<any>`
  height: 100%;
  width: 35%;
  border-radius: 4px 0 0 4px;
  display: ${props => props.display};
`

const shine = keyframes`
  to {
    background-position: right -40px top 0;
  }
`

const Skeleton = styled.div`
  background-color: #e2e5e7;
  background-image:
    linear-gradient(
      90deg, 
      rgba(255, 255, 255, 0), 
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0)
    );
  background-size: 40px 100%; 
  background-repeat: no-repeat; 
  background-position: left -40px top 0; 
  animation: ${shine} 1s ease infinite; 
`

export const ImageSkeleton = styled(Skeleton)`
  height: 210px;
  width: 35%;
  border-radius: 4px 0 0 4px;
`

export const TextContainer = styled.div`
  padding: 0.5rem 1rem;
  color: ${props => props.theme.colors.white};
  max-height: 210px;
  overflow-y: scroll;
  width: 65%;
  display: flex;
  flex-direction: column;
`

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.7rem;
`

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const Name = styled.div`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  font-weight: 700;
`

export const Label = styled.div`
  margin: 0.3rem 0;
  color: ${props => props.theme.colors.gray};
  font-size: 0.7rem;

  &::first-letter {
    text-transform: uppercase;
  }
`

export const Field = styled.div`
  margin: 0.3rem 0 0.6rem;
  color: ${props => props.theme.colors.white};
  font-size: 1rem;
`

export const FavoriteButton = styled.button`
  padding: 8px;
  border-radius: 3px;
  background: ${props => props.theme.colors.white};
  transition: all 0.2s ease-in;
  text-align: center;
  box-shadow: 1px 1px 2px 2px ${props => props.theme.colors.transpBlack};
  font-size: 1.1rem;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 25px;

  &:hover {
    box-shadow: 3px 3px 3px 3px ${props => props.theme.colors.transpBlack};
    transform: translateY(-3px);
  }

  &:active {
    box-shadow: 0px 1px 2px 2px ${props => props.theme.colors.transpBlack};
    transform: translateY(1px);
  }
`
