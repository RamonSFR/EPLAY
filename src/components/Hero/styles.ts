import styled from 'styled-components'

import { colors as c } from '../../styles/globalStyle'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;
  display: block;
  padding-top: 16px;
  height: 480px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ${TagContainer} {
    margin-right: 8px;
  }

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 1;
    position: relative;
    justify-content: space-between;
  }
`

export const Infos = styled.div`
  padding: 16px;
  background-color: ${c.black};
  max-width: 256px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;
  }

  span {
    text-decoration: line-through;
    display: block;
  }
`
