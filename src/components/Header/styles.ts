import styled from 'styled-components'

import { colors as c } from '../../styles/globalStyle'

export const Header = styled.header`
  background-color: ${c.grey};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  justify-content: space-between;

  img {
    cursor: pointer;
  }

  &,
  div {
    display: flex;
    align-items: center;
  }

  a {
    color: ${c.white};
    text-decoration: none;
    font-weight: bold;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  li {
    margin-right: 16px;
  }
`

export const CartButton = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    margin-left: 16px;
  }
`
