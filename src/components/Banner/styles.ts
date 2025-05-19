import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { breakpoints } from '../../styles/globalStyle'

export const Image = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  background-position-y: center;
  position: relative;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.7);
    content: '';
  }

  @media screen and (max-width: ${breakpoints.tabet}) {
    background-size: cover;
    background-position-x: center;
  }
`

export const Title = styled.h2`
  font-size: 36px;
  max-width: 450px;

  @media screen and (max-width: ${breakpoints.tabet}) {
    font-size: 28px;
    max-width: 300px;
  }
`

export const Prices = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
