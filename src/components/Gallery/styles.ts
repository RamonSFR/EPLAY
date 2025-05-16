import styled from 'styled-components'
import { colors as c } from '../../styles/globalStyle'

export const Items = styled.ul`
  display: flex;
  gap: 16px;
`

export const Item = styled.li`
  img {
    border: 2px solid ${c.white};
    border-radius: 8px;
    height: 150px;
    width: 150px;
    object-fit: cover;
  }
`
