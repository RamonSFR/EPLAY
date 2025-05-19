import Button from '../Button'
import Tag from '../Tag'
import * as S from './styles'

const Cart = () => (
  <S.CartContainer>
    <S.Overlay />
    <S.SideBar>
      <ul>
        <S.CartItem>
          <img
            src="https://fake-api-seven-wine.vercel.app/assets/cyberpunk/thumbnail.jpg"
            alt="placehold"
          />
          <div>
            <h3>Game Name</h3>
            <Tag>RPG</Tag>
            <Tag>Steam | PS5 | Xbox Series S/X</Tag>
            <span>$59.99</span>
          </div>
          <button type="button" />
        </S.CartItem>
        <S.CartItem>
          <img
            src="https://fake-api-seven-wine.vercel.app/assets/cyberpunk/thumbnail.jpg"
            alt="placehold"
          />
          <div>
            <h3>Game Name</h3>
            <Tag>RPG</Tag>
            <Tag>Steam | PS5 | Xbox Series S/X</Tag>
            <span>$59.99</span>
          </div>
          <button type="button" />
        </S.CartItem>
      </ul>
      <S.Quantity>2 game(s) on your cart</S.Quantity>
      <S.Prices>
        <p>
          Total of $259.99 <span>Up to 6x, interest-free</span>
        </p>
      </S.Prices>
      <Button type="button" title="click to finish your purchase">
        Proceed to Checkout
      </Button>
    </S.SideBar>
  </S.CartContainer>
)

export default Cart
