import type { Game } from '../../pages/Home'
import Product from '../Product'
import * as S from './styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => {
  const priceFormatter = (price: number) => {
    return new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  const getGameTags = (game: Game) => {
    const tags = []
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)

    }

    if (game.prices.current) {
      tags.push(priceFormatter(game.prices.current))
    }

    return tags
  }

  const ApiLink = 'https://fake-api-seven-wine.vercel.app/'

  return (
  <S.Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <S.List>
        {games.map(game => (
          <Product
          key={game.id}
          category={game.details.category}
          image={`${ApiLink}${game.media.thumbnail}`}
          infos={getGameTags(game)}
          system={game.details.system}
          title={game.name}
        />
        ))}
      </S.List>
    </div>
  </S.Container>
)
}

export default ProductsList
