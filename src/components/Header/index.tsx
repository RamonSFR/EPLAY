import { Link, useNavigate } from 'react-router-dom'

import * as S from './styles'
import logo from '../../assets/images/icons/logo.svg'
import cartSvg from '../../assets/images/icons/cart.svg'

const Header = () => {
  const navigate = useNavigate()
  return (
    <S.Header>
      <div>
        <img onClick={() => navigate('/')} src={logo} alt="EPLAY" />
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
      <S.LinkCart href="#">
        0 - produtos
        <img src={cartSvg} alt="cart" />
      </S.LinkCart>
    </S.Header>
  )
}

export default Header
