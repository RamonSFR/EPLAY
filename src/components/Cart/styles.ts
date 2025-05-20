import styled from 'styled-components'
import { breakpoints, colors as c } from '../../styles/globalStyle'
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
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${c.gray};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 512px;
  width: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  ${Btn} {
    max-width: 100%;
    width: 100%;
  }

  .empty-message {
    font-size: 14px;
    line-height: 22px;
    color: ${c.white};
    margin-bottom: 16px;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    max-width: 250px;
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
    color: ${c.gray2};
  }
`

export const Quantity = styled.p`
  margin-top: 32px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: bold;
  color: ${c.white};
  display: flex;
  align-items: center;

  img {
    width: 24px;
    margin-right: 8px;
  }
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${c.gray2};
  margin-bottom: 16px;
  padding: 8px 0;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${c.white};

    @media screen and (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
    }
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: ${c.white};

    @media screen and (max-width: ${breakpoints.tablet}) {
      margin-top: 24px;
      font-size: 16px;
    }
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;

    @media screen and (max-width: ${breakpoints.tablet}) {
      display: none;
    }
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

export const ClearCartBtn = styled(Btn)`
  background-color: ${c.red};
  border: none;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 16px;
    margin-right: 2px;
  }
`
