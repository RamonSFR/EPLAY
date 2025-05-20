import styled from 'styled-components'
import { colors as c } from '../../styles/globalStyle'

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
`

export const InputGroup = styled.div`
  flex: auto;

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
  }

  input {
    background-color: ${c.white};
    border: 1px solid ${c.white};
    height: 32px;
    width: 100%;
    padding: 0 8px;
  }
`
