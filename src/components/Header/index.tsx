import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import cartSvg from '../../assets/images/cart.svg'

const Header = () => (
  <S.Header>
    <div>
      <img src={logo} alt="EPLAY" />
      <nav>
        <S.Links>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">New Eeleases</a>
          </li>
          <li>
            <a href="#">Promos</a>
          </li>
        </S.Links>
      </nav>
    </div>
    <S.LinkCart href="#">
      0 - produtos
      <img src={cartSvg} alt="cart" />
    </S.LinkCart>
  </S.Header>
)

export default Header
