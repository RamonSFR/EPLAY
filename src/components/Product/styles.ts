import styled from 'styled-components'

import { colors as c } from '../../styles/globalStyle'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  padding: 8px;
  border-radius: 8px;
  background-color: ${c.grey};
  position: relative;
  cursor: pointer;

  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    display: block;
    height: 250px;
    width: 100%;
    border-radius: 4px;
    object-fit: cover;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
