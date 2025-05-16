import Product from '../Product'
import * as S from './styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <S.Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <S.List>
        <Product
          category="FPS"
          description="test"
          image="https://place-hold.it/222x250"
          infos={['-10%', '$60']}
          systems='Steam'
          title='Call of Duty Modern Warfare III'
        />
        <Product
          category="FPS"
          description="test"
          image="https://place-hold.it/222x250"
          infos={['-10%', '$60']}
          systems='Steam'
          title='Call of Duty Modern Warfare III'
        />
        <Product
          category="FPS"
          description="test"
          image="https://place-hold.it/222x250"
          infos={['-10%', '$60']}
          systems='Steam'
          title='Call of Duty Modern Warfare III'
        />
        <Product
          category="FPS"
          description="test"
          image="https://place-hold.it/222x250"
          infos={['-10%', '$60']}
          systems='Steam'
          title='Call of Duty Modern Warfare III'
        />
      </S.List>
    </div>
  </S.Container>
)

export default ProductsList
