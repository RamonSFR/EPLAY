import styled from 'styled-components'

import type { Props } from '.'
import { breakpoints, colors as c } from '../../styles/globalStyle'
import { Card } from '../Product/styles'

export const Container = styled.section<
  Omit<Props, 'title' | 'games' | 'isLoading'>
>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'grey' ? c.gray : c.black};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'grey' ? c.black : c.gray};
    box-shadow: 4px 4px 14px
      ${(props) =>
        props.background === 'grey' ? 'rgba(0,0,0,.45)' : 'rgba(51,51,51,.45)'};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 40px;

  @media screen and (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
