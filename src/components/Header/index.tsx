import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HashLink } from 'react-router-hash-link'

import logo from '../../assets/images/icons/logo.svg'
import cartSvg from '../../assets/images/icons/cart.svg'
import { open } from '../../store/reducers/cart'
import type { RootReducer } from '../../store'
import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [navIsOpen, setNavIsOpen] = useState(false)

  return (
    <S.Header>
      <S.HeaderRow>
        <div>
          <S.Hamburger onClick={() => setNavIsOpen(!navIsOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburger>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link title="click to access categories page" to="/categories">
                  Categories
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="click to access coming soon section"
                  to="/#soon"
                >
                  Releases
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink title="click to access sales section" to="/#on-sale">
                  Sales
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton role="button" onClick={() => dispatch(open())}>
          <p>
            {items.length}
            <span> - produto(s)</span>
          </p>
          <img src={cartSvg} alt="cart" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={navIsOpen ? '-isOpen' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link onClick={() => setNavIsOpen(false)} to="/categories">
              Categories
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              onClick={() => setNavIsOpen(false)}
              title="click to access coming soon section"
              to="/#soon"
            >
              Coming Soon
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              onClick={() => setNavIsOpen(false)}
              title="click to access sales section"
              to="/#on-sale"
            >
              Sales
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.Header>
  )
}

export default Header
