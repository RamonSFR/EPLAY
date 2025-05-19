import { useDispatch, useSelector } from 'react-redux'

import type { RootReducer } from '../../store'
import { clear, close, remove } from '../../store/reducers/cart'
import { ApiPath } from '../../services/api'

import * as S from './styles'
import Button from '../Button'
import Tag from '../Tag'
import cartIco from '../../assets/images/icons/cart.svg'
import trashIco from '../../assets/images/icons/trash.svg'

import setSystems from '../../utils/functions/setSystems'
import priceFormatter from '../../utils/functions/priceFormatter'

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const getTotal = () => {
    const total = items.reduce((acc, item) => {
      return acc + item.prices.current!
    }, 0)
    return total
  }

  const total = getTotal()

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={() => dispatch(close())} />
      <S.SideBar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={`${ApiPath}${item.media.thumbnail}`} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{setSystems(item.details.system)}</Tag>
                <span>{priceFormatter(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => dispatch(remove(item.id))} />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>
          <img src={cartIco} />
          {items.length} game(s) on your Cart{' '}
        </S.Quantity>
        <S.Prices>
          Total of {priceFormatter(total)}{' '}
          {total >= 100 ? <span>Up to 6x, interest-free</span> : ''}
        </S.Prices>
        {items.length > 0 ? (
          <>
            <S.ClearCartBtn
              type="button"
              title="click to clear your cart"
              onClick={() => dispatch(clear())}
            >
              <img src={trashIco} alt="cart" />
              Clear Cart
            </S.ClearCartBtn>
            <Button type="button" title="click to finish your purchase">
              Proceed to Checkout
            </Button>
          </>
        ) : (
          <Button
            type="button"
            title="click to go back to shopping"
            onClick={() => dispatch(close())}
          >
            Back to shopping
          </Button>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
