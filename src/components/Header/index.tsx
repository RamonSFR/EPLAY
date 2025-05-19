import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import logo from '../../assets/images/icons/logo.svg'
import cartSvg from '../../assets/images/icons/cart.svg'
import { open } from '../../store/reducers/cart'
import type { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state:RootReducer) => state.cart)

  return (
    <S.Header>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <S.Links>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/releases">Releases</Link>
            </li>
            <li>
              <Link to="/promos">Promos</Link>
            </li>
          </S.Links>
        </nav>
      </div>
      <S.CartButton onClick={() => dispatch(open())}>
        {items.length} - produtos
        <img src={cartSvg} alt="cart" />
      </S.CartButton>
    </S.Header>
  )
}

export default Header
