import styled from 'styled-components'
import { colors as c } from '../../styles/globalStyle'

type InputGroupProps = {
  maxwidth?: string
  defaultflex?: string
}

type RowProps = {
  margintop?: string
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.margintop || '0px'};
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: ${(props) => (props.defaultflex === 'flex' ? '' : 'auto')};

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
  }

  input,
  select {
    background-color: ${c.white};
    border: 1px solid ${c.white};
    height: 32px;
    width: 100%;
    padding: 0 8px;
    max-width: ${(props) => props.maxwidth || 'auto'};
  }

  small {
    color: ${c.red};
  }
`

export const TabButton = styled.button`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${c.white};
  background-color: ${c.black};
  height: 32px;
  border: none;
  margin: 0 16px 24px 0;
  padding: 0 16px;
  cursor: pointer;

  &.isActive {
    background-color: ${c.green};
  }

  img {
    margin-right: 8px;
  }
`
