import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import cartSvg from '../../assets/images/carrinho.svg'

const Header = () => (
  <S.Header>
    <div>
      <img src={logo} alt="EPLAY" />
      <nav>
        <S.Links>
          <li>
            <a href="#">Categorias</a>
          </li>
          <li>
            <a href="#">Novidades</a>
          </li>
          <li>
            <a href="#">Promoções</a>
          </li>
        </S.Links>
      </nav>
    </div>
    <S.LinkCart href="#">
      0 - produtos
      <img src={cartSvg} alt="carrinho" />
    </S.LinkCart>
  </S.Header>
)

export default Header
