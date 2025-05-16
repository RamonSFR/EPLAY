import styled from 'styled-components'
import { colors as c } from '../../styles/globalStyle'

export const Container = styled.footer`
  padding: 32px 0;
  background-color: ${c.grey};
  font-size: 14px;
`

export const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: ${c.white};
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled.a`
  color: ${c.grey2};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
