import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles/globalStyle'

export const Btn = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  background-color: transparent;
`

export const BtnLink = styled(Link)`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  background-color: transparent;
  text-decoration: none;
`
