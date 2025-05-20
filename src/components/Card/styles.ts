import styled from 'styled-components'

import { colors as c } from '../../styles/globalStyle'

export const Container = styled.div`
  background-color: ${c.gray};
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 40px;

  h2, h3 {
    font-weight: bold;
    font-size: 18px;
    color: ${c.white};
    margin-bottom: 24px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  .margin-top {
    margin-top: 24px;
  }

  .margin-bottom {
    margin-bottom: 32px;
  }
`
