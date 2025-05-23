import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors as c } from '../../styles/globalStyle'

type Props = {
  variant?: 'primary' | 'secondary'
}

export const Btn = styled.button<Props>`
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 8px;
  font-weight: bold;
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? c.green : c.white)};
  color: ${c.white};
  background-color: ${(props) =>
    props.variant === 'primary' ? c.green : 'transparent'};
  cursor: pointer;
`

export const BtnLink = styled(Link)`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  border: 2px solid ${c.white};
  color: ${c.white};
  background-color: transparent;
  text-decoration: none;
`
