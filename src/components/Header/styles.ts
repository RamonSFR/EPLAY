import styled from 'styled-components'

import { colors } from '../../styles/globalStyle'

export const Header = styled.header`
  background-color: ${colors.grey};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  justify-content: space-between;

  &,
  div {
    display: flex;
    align-items: center;
  }

  a {
    color: ${colors.white};
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

export const LinkCart = styled.a`
  display: flex;
  align-items: center;

  img {
    margin-left: 16px;
  }
`
