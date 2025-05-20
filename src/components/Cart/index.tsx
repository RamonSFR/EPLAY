import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'
import cartIco from '../../assets/images/icons/cart.svg'
import trashIco from '../../assets/images/icons/trash.svg'

import type { RootReducer } from '../../store'
import { clear, close, remove } from '../../store/reducers/cart'
import { ApiPath } from '../../services/api'

import setSystems from '../../utils/functions/setSystems'

import * as S from './styles'
import parseToUsd from '../../utils/functions/parseToUsd'
import getTotal from '../../utils/functions/getTotal'

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const goToCheckout = () => {
    navigate('/checkout')
    dispatch(close())
  }

  const clearCart = () => {
    dispatch(clear())
    dispatch(close())
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const total = getTotal(items)

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={() => dispatch(close())} />
      <S.SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img
                    src={`${ApiPath}${item.media.thumbnail}`}
                    alt={item.name}
                  />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{setSystems(item.details.system)}</Tag>
                    <span>{parseToUsd(item.prices.current)}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => dispatch(remove(item.id))}
                  />
                </S.CartItem>
              ))}
            </ul>
            <S.Quantity>
              <img src={cartIco} />
              {items.length} game(s) on your Cart{' '}
            </S.Quantity>
            <S.Prices>
              Total of {parseToUsd(total)}{' '}
              {total >= 100 ? <span>Up to 6x, interest-free</span> : ''}
            </S.Prices>
            <S.ClearCartBtn
              type="button"
              title="click to clear your cart"
              onClick={clearCart}
            >
              <img src={trashIco} alt="cart" />
              Clear Cart
            </S.ClearCartBtn>
            <Button
              onClick={goToCheckout}
              type="button"
              title="click to finish your purchase"
            >
              Proceed to Checkout
            </Button>
          </>
        ) : (
          <>
            <S.Quantity>
              <img src={cartIco} />
              Your shopping cart is empty
            </S.Quantity>
            <p className="empty-message">
              Add at least one game to process to checkout
            </p>
            <Button
              type="button"
              title="click to go back to shopping"
              onClick={() => dispatch(close())}
            >
              Back to shopping
            </Button>
          </>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
