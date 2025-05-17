import styled from 'styled-components'
import { colors as c } from '../../styles/globalStyle'

export const Items = styled.ul`
  display: flex;
  gap: 16px;
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
`

export const Item = styled.li`
  position: relative;

  & > img {
    border: 2px solid ${c.white};
    border-radius: 8px;
    height: 150px;
    width: 150px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity .25s ease;
    }
  }
`
