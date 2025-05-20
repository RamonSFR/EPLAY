import styled from 'styled-components'

import { breakpoints, colors as c } from '../../styles/globalStyle'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media screen and (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.-isOpen {
    display: block;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media screen and (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      padding: 16px 0;
      display: block;
      text-align: center;
    }
  }
`

export const Header = styled.header`
  background-color: ${c.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  h1 {
    line-height: 0;
  }

  img,
  a,
  span {
    cursor: pointer;
  }

  a,
  span {
    color: ${c.white};
    text-decoration: none;
    font-weight: bold;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
  }
`

export const CartButton = styled.span`
  display: flex;
  align-items: center;

  img {
    margin-left: 16px;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`

export const Hamburger = styled.div`
  width: 32px;
  cursor: pointer;

  span {
    height: 2px;
    width: 100%;
    display: block;
    background-color: ${c.white};
    margin-bottom: 4px;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const HeaderRow = styled.div`
  justify-content: space-between;

  &,
  > div {
    display: flex;
    align-items: center;

    @media screen and (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;
      ${Links} {
        display: none;
      }
    }
  }
`
