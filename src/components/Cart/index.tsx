import { useDispatch, useSelector } from 'react-redux'

import type { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { ApiPath } from '../../services/api'

import * as S from './styles'
import Button from '../Button'
import Tag from '../Tag'

import setSystems from '../../utils/functions/setSystems'
import priceFormatter from '../../utils/functions/priceFormatter'

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const getTotal = () => {
    const total = items.reduce((acc, item) => {
      return acc + item.prices.current!
    }, 0)

    return priceFormatter(total)
  }

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
              <button type="button" onClick={() => dispatch(remove(item.id))}/>
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} game(s) on your cart</S.Quantity>
        <S.Prices>
          Total of {getTotal()} <span>Up to 6x, interest-free</span>
        </S.Prices>
        <Button type="button" title="click to finish your purchase">
          Proceed to Checkout
        </Button>
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
