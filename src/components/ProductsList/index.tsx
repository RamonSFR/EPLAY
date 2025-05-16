import Product from '../Product'
import * as S from './styles'

type Props = {
  title: string
  background: 'grey' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <S.Container>
    <div className='container'>
      <h2>{title}</h2>
      <S.List>
        <Product />
        <Product />
        <Product />
        <Product />
      </S.List>
    </div>
  </S.Container>
)

export default ProductsList
