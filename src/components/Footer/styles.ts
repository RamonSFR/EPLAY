import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'
import { colors as c } from '../../styles/globalStyle'

export const Container = styled.footer`
  padding: 32px 0;
  background-color: ${c.gray};
  font-size: 14px;
  margin-top: 40px;
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

export const Link = styled(HashLink)`
  color: ${c.gray2};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
