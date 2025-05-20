import styled from 'styled-components'

import { colors as c } from '../../styles/globalStyle'
import type { Props } from '.'

export const TagContainer = styled.div<Props>`
  display: inline-block;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  border-radius: 14px;
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  background: ${c.green};
  color: ${c.white};
`
