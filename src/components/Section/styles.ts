import styled from 'styled-components'

import type { Props } from '.'
import { colors as c } from '../../styles/globalStyle'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'children'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'grey' ? c.gray : c.black};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'grey' ? c.black : c.gray};
  }

  p {
    font-weight: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
