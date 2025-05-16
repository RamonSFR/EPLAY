import type Game from '../../models/Game'
import Product from '../Product'
import * as S from './styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => (
  <S.Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <S.List>
        {games.map(game => (
          <Product
          key={game.id}
          category={game.category}
          description={game.description}
          image={game.image}
          infos={game.infos}
          systems={game.systems}
          title={game.title}
        />
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default ProductsList
