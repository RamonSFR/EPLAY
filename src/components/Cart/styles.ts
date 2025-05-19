import styled from 'styled-components'
import { colors as c } from '../../styles/globalStyle'
import { TagContainer } from '../Tag/styles'
import { Btn } from '../Button/styles'
import close from '../../assets/images/icons/close.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const SideBar = styled.aside`
  background-color: ${c.grey};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${Btn} {
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${c.white};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${c.grey2};
  }
`

export const Quantity = styled.p`
  margin-top: 32px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: bold;
  color: ${c.white};
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${c.grey2};
  margin-bottom: 16px;
  padding: 8px 0;
  position: relative;

  img {
    width: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${c.white};
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: ${c.white};
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    background-image: url(${close});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    top: 8;
    right: 0;
  }
`
